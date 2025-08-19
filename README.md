# Medibly

This is a Next.js Tailwind PostgreSQL Prisma project (TypeScript, ESLint) with Supabase integration.

## Features

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Prisma ORM with PostgreSQL
- NextAuth.js for authentication
- Supabase integration
- PDF generation and Excel handling
- PowerBI integration

## Local Development

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Supabase account (for production deployment)

### Environment Setup

1. Copy the environment template:
   ```bash
   cp env.example .env.local
   ```

2. Configure your environment variables in `.env.local`:
   ```bash
   DATABASE_URL="postgres://postgres:<password>@localhost:5432/<dbname>"
   NEXTAUTH_SECRET="<random_secret_key>"
   NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="your_supabase_anon_key"
   ```

### Installation

```bash
npm install
```

### Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push
```

### Running the Application

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Supabase Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Quick Deploy Steps:

1. Create a Supabase project at https://supabase.com
2. Get your project credentials
3. Update environment variables
4. Deploy to Vercel or your preferred platform

### Supabase Commands

```bash
# Start local Supabase
npm run supabase:start

# Check status
npm run supabase:status

# Push database changes
npm run db:push

# Reset database
npm run db:reset
```

## Project Structure

```
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # React components
│   └── lib/          # Utility functions and configurations
├── prisma/           # Database schema and migrations
├── supabase/         # Supabase configuration
└── public/           # Static assets
```

## Database Schema

The application includes the following models:
- User: Authentication and user management
- Post: File uploads and document management
- BankStatement: Financial transaction records
- BillingReport: Medical billing information

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary.
