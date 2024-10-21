import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://pfypklbyqyprxjgsjksb.supabase.co';
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmeXBrbGJ5cXlwcnhqZ3Nqa3NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0MTQzNjAsImV4cCI6MjAzNjk5MDM2MH0.zNQ8XkYJ1MGDErKjdI1NLeHztGvCExtCsAjEiWHps90`;
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;