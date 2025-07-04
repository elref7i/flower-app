import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "next-auth";
import { JSON_HEADER } from "./lib/constants/api.constants";
import { LoginResponse } from "./lib/types/auth";

// Auth options
const authOptions: NextAuthOptions = {
  pages: { signIn: "/auth/login", signOut: "/" },
  providers: [
    //Credential provider
    CredentialsProvider({
      name: "credential",
      credentials: {
        email: {},
        password: {},
      },

      // authorize function
      authorize: async (credentials) => {
        // Credentials object
        const loginCredentials = { email: credentials?.email, password: credentials?.password };

        // Login promise
        const response = await fetch(`${process.env.BASE_API}/auth/signin`, {
          method: "POST",
          body: JSON.stringify(loginCredentials),
          headers: { ...JSON_HEADER },
        });

        // login payload response
        const payload: APIResponse<LoginResponse> = await response.json();

        // If login failed return error
        if ("error" in payload) throw new Error(payload.error || "Login failed");

        // Return user data to encoded using jwt callback
        return {
          id: payload.user._id,
          token: payload.token,
          user: payload.user,
        } as User;
      },
    }),
  ],

  // Callbacks
  callbacks: {
    jwt: ({ token, user }) => {
      // If the user exists, save the new user data in the cookies
      if (user) {
        token.token = user.token;
        token.user = user.user;
      }
      return token;
    },
    session: ({ session, token }) => {
      // Decode the user data from the token cookie and store it in the session object
      session.user = token.user;

      return session;
    },
  },
};

export default authOptions;
