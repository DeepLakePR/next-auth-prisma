# Next Auth Prisma

A production-minded authentication boilerplate built with Next.js, Auth.js (NextAuth), Prisma ORM, and PostgreSQL.

## Key Highlights

- Next.js 14 application architecture
- Auth.js (NextAuth) credentials-based authentication
- Prisma ORM with PostgreSQL
- Type-safe database access through Prisma Client
- Protected dashboard route with authentication middleware
- Secure password validation using bcrypt
- JWT session strategy with optional "remember me" behavior

## The Problem

Modern web applications need authentication flows that are secure, scalable, and easy to extend. A common challenge is implementing user authentication while keeping the codebase maintainable, protecting private routes, and preparing the system for role-based access control as the application grows.

This project addresses that challenge by providing a focused authentication foundation with database-backed users, encrypted password checks, session handling, and route protection.

## The Solution

This project is a boilerplate/system focused on security best practices and type-safe database interactions.

It uses Auth.js (NextAuth) with a credentials provider for login, Prisma ORM for strongly typed database operations, and PostgreSQL as the persistence layer. Protected routes are handled through NextAuth middleware, making the project a practical starting point for applications that need private dashboards, session persistence, and future role-based authorization rules.

## Technologies

- Next.js 14
- React
- TypeScript
- Auth.js / NextAuth
- Prisma ORM
- PostgreSQL
- bcrypt
- Zod
- React Hook Form
- Tailwind CSS
- shadcn/ui components

## How to Run

### Prerequisites

- Node.js installed
- PostgreSQL database available
- npm installed

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

Create a `.env` file in the project root and configure the required environment variables:

```env
PRISMA_DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
AUTH_SECRET="your-auth-secret"
```

Generate the Prisma Client:

```bash
npx prisma generate
```

Apply the database schema:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```
