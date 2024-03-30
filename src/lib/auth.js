import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "@/lib/utils";
import { User } from "@/lib/models";
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
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
