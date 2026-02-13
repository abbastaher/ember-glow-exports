
CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  country TEXT NOT NULL,
  email TEXT NOT NULL,
  product TEXT NOT NULL,
  quantity TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public inquiry form)
CREATE POLICY "Anyone can submit an inquiry"
  ON public.inquiries FOR INSERT
  WITH CHECK (true);

-- Only authenticated users (admins) can read inquiries
CREATE POLICY "Authenticated users can read inquiries"
  ON public.inquiries FOR SELECT
  USING (auth.role() = 'authenticated');
