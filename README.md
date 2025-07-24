This is a Next.js Tailwind Postgresql Prisma project(Typescript, Eslint).

## Local Postgresql Server 

First, connect to the postgresql server.(Make .env)

```bash
DATABASE_URL="postgres://postgres:<password>@localhost:5432/<dbname>"
NEXTAUTH_SECRET="<random_secret_key>"
```

## Local WebService test

Second, run the development server:

```bash
npm install
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
