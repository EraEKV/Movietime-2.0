import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/shared/api/db";
import authConfig from "./auth.config";
import { getUserById } from "@/entities/user/api/user";
import { UserRole } from "@prisma/client";
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      });
    }
  },
  callbacks: {
    async signIn({ user, account }) {
      console.log(user, account)
      // Allow oauth without email verification
      if(account?.provider !== "credentials") return true;

      const existingUser = user.id ? await getUserById(user.id) : null;

      // Prevent Signin without email verification
      if(!existingUser?.emailVerified) return false;

      return true;
    },
    async session({ token, session }) {
      console.log({sessionToken: token})
      if(token.sub && session.user) {
        session.user.id = token.sub;
      }

      if(token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      return session;
    },
    async jwt({ token }) {
      if(!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if(!existingUser) return token;

      token.role = existingUser.role;

      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig
})