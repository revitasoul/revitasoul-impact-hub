CREATE TABLE public.email_signups (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.email_signups TO service_role;

ALTER TABLE public.email_signups ENABLE ROW LEVEL SECURITY;