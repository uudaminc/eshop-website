// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phoneNumber: { label: "Phone Number", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }
        const { phoneNumber, password } = credentials;
        console.log("Credentials:", { phoneNumber, password });

        const response = await fetch(
          `${process.env.NEXTAUTH_URL}/api/auth/signin`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phoneNumber: phoneNumber,
              password: password,
            }),
          }
        );

        if (response.ok) {
          const user = await response.json();
          console.log("User authenticated:", user);
          return user;
        } else {
          console.log("Authentication failed:", await response.text());
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
};

export const POST = NextAuth(authOptions);
export const GET = NextAuth(authOptions);
