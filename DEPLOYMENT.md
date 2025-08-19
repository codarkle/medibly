# Deploying to Supabase

This guide will help you deploy your Next.js application to Supabase.

## Prerequisites

1. A Supabase account (sign up at https://supabase.com)
2. Node.js and npm installed
3. Git repository set up

## Step 1: Create a Supabase Project

1. Go to https://supabase.com and sign in
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: `medibly` (or your preferred name)
   - Database Password: Create a strong password
   - Region: Choose the closest region to your users
5. Click "Create new project"

## Step 2: Get Your Supabase Credentials

1. In your Supabase dashboard, go to Settings > API
2. Copy the following values:
   - Project URL
   - Anon public key
   - Service role key (keep this secret)

## Step 3: Configure Environment Variables

1. Copy the `env.example` file to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   DATABASE_URL=your_database_url
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

## Step 4: Set Up Database

1. Get your database connection string from Supabase:
   - Go to Settings > Database
   - Copy the connection string

2. Update your `.env.local` with the database URL:
   ```env
   DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
   ```

3. Push your Prisma schema to Supabase:
   ```bash
   npm run build
   ```

## Step 5: Deploy to Vercel (Recommended for Next.js)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

3. Add your environment variables in Vercel dashboard:
   - Go to your project settings
   - Add all variables from `.env.local`

## Step 6: Alternative - Deploy to Supabase Edge Functions

If you want to deploy as Edge Functions:

1. Login to Supabase CLI:
   ```bash
   npx supabase login
   ```

2. Link your project:
   ```bash
   npx supabase link --project-ref your-project-ref
   ```

3. Deploy:
   ```bash
   npx supabase functions deploy
   ```

## Step 7: Update Production URLs

After deployment, update your environment variables:

1. Update `NEXTAUTH_URL` to your production URL
2. Update any other URLs that reference localhost

## Troubleshooting

### Database Connection Issues
- Verify your `DATABASE_URL` is correct
- Check that your IP is allowed in Supabase dashboard
- Ensure your database password is correct

### Build Issues
- Make sure all environment variables are set
- Check that Prisma schema is valid
- Verify all dependencies are installed

### Authentication Issues
- Ensure `NEXTAUTH_SECRET` is set
- Verify `NEXTAUTH_URL` matches your deployment URL
- Check Supabase authentication settings

## Local Development

To run locally with Supabase:

```bash
# Start local Supabase
npm run supabase:start

# Start development server
npm run dev
```

## Useful Commands

```bash
# Check Supabase status
npm run supabase:status

# Reset database
npm run db:reset

# Push database changes
npm run db:push
``` 