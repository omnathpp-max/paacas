/*
  # Create resumes storage bucket

  1. Creates a private `resumes` storage bucket
  2. Allows anonymous uploads (insert) — the edge function uses the service role to read files
  3. No public read access — files are only fetched server-side
*/

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'resumes',
  'resumes',
  false,
  10485760,
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Anyone can upload a resume"
  ON storage.objects
  FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'resumes');
