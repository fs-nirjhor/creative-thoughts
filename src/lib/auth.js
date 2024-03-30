import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "@/lib/utils";
import { User } from "@/lib/models";
import bcrypt from "bcrypt";

const handleSignIn = async (credentials) => {
  try {
    const { email, password } = credentials;
    await connectToDb();
    const user = await User.findOne({ email });
    if (!user) {
      console.error("No user found");
      throw new Error("No user found");
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.error("Incorrect password");
      throw new Error("Incorrect password");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHubProvider,
    CredentialsProvider({
      async authorize(credentials) {
        const user = await handleSignIn(credentials);
        return user ? user : null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        try {
          await connectToDb();
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = await User.create({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });
          }
        } catch (err) {
          return false;
        }
      }
      return true;
    },
  },
});
