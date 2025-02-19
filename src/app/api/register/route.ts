import { NextResponse } from "next/server";
import { TUserRegistration } from "../../../types/UserRegistrationType";
//NextResponse https://nextjs.org/docs/app/api-reference/functions/next-response#cookies

// To handle a GET request to /api/register
export async function GET(req, res) {
  // const response = NextResponse.json(
  //   { message: "registration endpoint hit" },
  //   { status: 200 }
  // );
  // response.cookies.set("attempted-registration", "true");
  // return response;
}

// To handle a POST request to /api
export async function POST(req: Response) {
  const { searchParams } = new URL(req.url);
  const queryParams = Object.fromEntries(searchParams);
  const userObj: TUserRegistration = {
    email: queryParams.email || "",
    username: queryParams.username || "",
    password: queryParams.password || "",
  };

  if (!userObj.email || !userObj.username || !userObj.password) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // console.log("inside route", userObj);
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
