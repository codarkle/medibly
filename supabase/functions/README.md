# Supabase Edge Functions

This directory contains Edge Functions that can be deployed to Supabase.

## Deployment

To deploy functions to Supabase:

1. Make sure you're logged in to Supabase CLI:
   ```bash
   npx supabase login
   ```

2. Link your project:
   ```bash
   npx supabase link --project-ref your-project-ref
   ```

3. Deploy functions:
   ```bash
   npx supabase functions deploy
   ```

## Local Development

To run functions locally:

```bash
npx supabase start
```

This will start the local Supabase instance with all functions available. 