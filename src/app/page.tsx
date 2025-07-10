import Image from "next/image";

// Prisma Client and Accelerate Extension
import { PrismaClient } from '../generated/prisma';
import { withAccelerate } from '@prisma/extension-accelerate';
import Link from "next/link";

const prisma = new PrismaClient().$extends(withAccelerate());

export default function Home() {
  return (
    <Link href="/login">Login</Link>
  );
}
