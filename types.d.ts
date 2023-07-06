import { User } from "@prisma/client";

type SafeUser = Omit<User, "createdAt" | "updatedAt" | "emailVerified"> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

interface UsersProps {
  currentUser?: SafeUser | null;
}
