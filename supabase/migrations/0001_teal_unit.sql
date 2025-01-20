/*
  # Create project requests table

  1. New Tables
    - `project_requests`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text) 
      - `email` (text)
      - `project_type` (text)
      - `description` (text)
      - `created_at` (timestamp)
      - `status` (text)

  2. Security
    - Enable RLS on `project_requests` table
    - Add policy for inserting new requests
*/

CREATE TABLE IF NOT EXISTS project_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  description text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

-- Enable RLS
ALTER TABLE project_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new requests
CREATE POLICY "Allow anonymous insert" ON project_requests
  FOR INSERT 
  WITH CHECK (true);
