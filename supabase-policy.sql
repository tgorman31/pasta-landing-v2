-- Enable Row Level Security
alter table contact_submissions enable row level security;

-- Create policy to allow inserts
create policy "Enable insert for authenticated and anonymous users" 
on contact_submissions for insert 
to anon, authenticated 
with check (true);

-- Verify the table exists and has the correct structure
select 
    column_name, 
    data_type, 
    is_nullable
from information_schema.columns
where table_name = 'contact_submissions'; 