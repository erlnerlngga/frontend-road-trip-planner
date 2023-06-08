import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import env from "./utils/constan";

type responType = {
  status: string;
  token: string;
};

const checkVerify = async (tokenString: string) => {
  const res = await fetch(`${env.url_api}/auth/${tokenString}`, {
    credentials: "include",
  });

  if (!res.ok) throw new Error("failed to fecth");

  return res.json();
};

const logout = async (tokenString: string) => {
  const res = await fetch(`${env.url_api}/logout`, {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${tokenString}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("failed to fecth");

  return res.json();
};

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/auth")) {
    const tokenString = request.nextUrl.pathname.slice(
      request.nextUrl.pathname.lastIndexOf("/") + 1
    );

    const res = (await checkVerify(tokenString)) as responType;

    if (res.status === "ok") {
      // setting cookies
      const response = NextResponse.redirect(new URL(`/home`, request.url));
      response.cookies.set({
        name: "token-user",
        value: res.token,
        path: "/",
        expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        maxAge: 60 * 60 * 24, // 24hour in seccond
        httpOnly: true,
        secure: true,
      });
      return response;
    }
    return NextResponse.redirect(new URL(`/signup`, request.url));
  }
  if (request.nextUrl.pathname.startsWith("/home")) {
    // get the cookie
    let tokenString = request.cookies.get("token-user")?.value;

    if (!tokenString)
      return NextResponse.redirect(new URL(`/signup`, request.url));

    const res = (await checkVerify(tokenString)) as responType;

    if (res.status !== "ok")
      return NextResponse.redirect(new URL(`/signup`, request.url));

    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith("/logout")) {
    // get the cookie
    let tokenString = request.cookies.get("token-user")?.value;

    if (!tokenString)
      return NextResponse.redirect(new URL(`/signup`, request.url));

    await logout(tokenString);

    const response = NextResponse.redirect(new URL(`/`, request.url));
    response.cookies.set({
      name: "token-user",
      value: "",
      path: "/",
      expires: 0,
      maxAge: -1,
      httpOnly: true,
    });
    return response;
  }
}
