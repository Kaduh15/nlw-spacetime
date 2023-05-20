import jwtDecode from "jwt-decode";
import { cookies } from "next/headers";

export type User = {
  sub: string;
  name: string;
  avatarUrl: string;
};

export const getUser = (): User => {
  const token = cookies().get("token")?.value;

  if (!token) {
    throw new Error("Unauthenticated");
  }

  const user = jwtDecode<User>(token);

  return user;
};
