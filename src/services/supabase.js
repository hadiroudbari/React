import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ffwtmbwuqlquxgqowgkp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmd3RtYnd1cWxxdXhncW93Z2twIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4MjE1MzYsImV4cCI6MjAxNTM5NzUzNn0.26RXVXwr6FtXDCWjapfQjQaDfnWq0ghf4kvCdyuB1ys";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
