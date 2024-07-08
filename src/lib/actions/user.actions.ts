// ... your initilization functions
"use server"
import { createAdminClient, createSessionClient } from "@/utils/appwrite";
import { parseStringify } from "@/utils/utils";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import { parse } from "path";

type SignUpParams = {
  email: string;
  password: string;
};

export const signUp = async (userData: SignUpParams) => {
  try {
    const { account } = await createAdminClient();
    const { email, password } = userData;

    const newUserAccount = await account.create(ID.unique(), email, password);
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUserAccount);
  } catch (error) {
    console.log("Error:", error);
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user)

  } catch (error) {
    console.log(error)
    return null;
  }
}
