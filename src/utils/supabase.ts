import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(
  "https://uuipjavpljzwswbywqbb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1aXBqYXZwbGp6d3N3Ynl3cWJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0Mzg1MTEsImV4cCI6MjA0ODAxNDUxMX0.yztBEafAlCvI_BxJC3F15m3HxOxCbbgFRqUtEdpZD7g"
);
