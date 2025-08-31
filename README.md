# Expense-ai

Running the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Backend

- `Neon` (PostgreSQL – NoSQL) cloud DB used for scalability
- `Prisma` (Object Relational Model) to talk to DB
- Using `Clerk` for authentication

- We created a folder in root called `/lib` that contains `db.ts`
    - this file is used to connect to the db (if it's not already connected)

### Adding Clerk Authentication

- easily add authentication to application (github, google, etc)