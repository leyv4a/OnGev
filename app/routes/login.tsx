import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Logo } from "~/components/logo";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "Login - OnGev" },
    { name: "description", content: "Login page" },
  ];
};

export default function Login() {
  return (
    <section className="w-full bg-white min-h-screen flex flex-col">
      <nav>
        <Link className="m-3 flex items-center space-x-2 px-4 " to={"/"}>
        <Logo className="h-8 w-8 md:h-10 md:w-10" />
        <h1 className="font-bold">OnGev</h1>
        </Link>
      </nav>
      <div className="container md:flex justify-center items-center px-4 md:px-6 flex-1">
        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
          <span className="cursor-pointer font-extrabold bg-gradient-to-r from-purple-700 via-violet-500 text-transparent bg-clip-text to-pink-700">
              Log-in
            </span>{" "}
            to experience the adventure!
         
          </h1>
          <p className="text-slate-500 mt-2">By <a className="text-purple-700 hover:text-purple-900 font-bold" href="https://www.geverel.com" rel="noreferrer" target="_blank">geverel.com</a></p>
        </div>

        <Card className="relative group overflow-hidden rounded-md md:w-1/2">
          <CardContent>
          <Button  className="font-bold">
            Log in
          </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
