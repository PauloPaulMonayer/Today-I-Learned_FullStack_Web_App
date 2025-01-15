import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lvvsmpgwjxkuptpssbto.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2dnNtcGd3anhrdXB0cHNzYnRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxMTgxNDQsImV4cCI6MjA0MDY5NDE0NH0.TIlOPW0ctyeFxqDkn4W0AWQTXdb6Fn4VTae21gNfIzc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
