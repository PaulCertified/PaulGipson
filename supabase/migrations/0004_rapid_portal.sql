-- Create a new storage bucket for project images
DO $$
BEGIN
  -- Create the storage bucket if it doesn't exist
  INSERT INTO storage.buckets (id, name, public)
  VALUES ('project-images', 'project-images', true)
  ON CONFLICT (id) DO NOTHING;

  -- Create storage policy to allow authenticated users to upload images
  CREATE POLICY "Allow authenticated users to upload images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'project-images' AND
    auth.role() = 'authenticated'
  );

  -- Create storage policy to allow public access to images
  CREATE POLICY "Allow public access to project images"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'project-images');
END $$;
