/*
  # Update project requests table policies

  1. Changes
    - Safely create insert policy if it doesn't exist
    - Ensure RLS is enabled
*/

-- First ensure RLS is enabled
ALTER TABLE project_requests ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists and create new one
DO $$ 
BEGIN
    -- Drop the policy if it exists
    DROP POLICY IF EXISTS "Allow anonymous insert" ON project_requests;
    
    -- Create the policy
    CREATE POLICY "Allow anonymous insert" ON project_requests
        FOR INSERT 
        WITH CHECK (true);
EXCEPTION
    WHEN undefined_object THEN 
        NULL;  -- Handle case where table doesn't exist
END $$;
