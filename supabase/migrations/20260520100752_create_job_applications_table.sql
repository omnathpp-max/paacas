/*
  # Create job_applications table

  1. New Tables
    - `job_applications`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `phone` (text)
      - `location` (text)
      - `experience` (text)
      - `role` (text)
      - `qualification` (text)
      - `linkedin` (text)
      - `about` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `job_applications` table
    - No public read/update/delete — insert only via service role (edge function)
*/

CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL DEFAULT '',
  last_name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  location text NOT NULL DEFAULT '',
  experience text NOT NULL DEFAULT '',
  role text NOT NULL DEFAULT '',
  qualification text NOT NULL DEFAULT '',
  linkedin text NOT NULL DEFAULT '',
  about text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert applications"
  ON job_applications
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can select applications"
  ON job_applications
  FOR SELECT
  TO service_role
  USING (true);
