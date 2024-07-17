import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Logo } from "~/components/logo";
import { EarthLock as CircleUserRound } from 'lucide-react';
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "OnGev" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <section className="w-full bg-white min-h-screen flex flex-col">
      <nav className="m-3 flex items-center space-x-2 px-4 ">
        <Logo className="h-8 w-8 md:h-10 md:w-10" />
        <h1 className="font-bold">OnGev</h1>
      </nav>
      <div className="container md:flex justify-center items-center px-4 md:px-6 flex-1">
        <Card className="relative group overflow-hidden rounded-md md:w-1/2">
          <CardContent>
            <div className="h-full w-full rounded-md">Agregar un slider de fotos**</div>
          </CardContent>
        </Card>
        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
            <div className=" flex  justify-center">A&nbsp;<div className="-skew-y-4 -rotate-3">{" "}Minimalist</div>&nbsp;Social</div> Platform for{" "}
            <span className="cursor-pointer font-extrabold bg-gradient-to-r from-purple-700 via-violet-500 text-transparent bg-clip-text to-pink-700">
              Software Engineers
            </span>
          </h1>
          <p className="text-slate-500 mt-2">By <a className="text-purple-700 hover:text-purple-900 font-bold" href="https://www.geverel.com" rel="noreferrer" target="_blank">geverel.com</a></p>
          <Button  className="font-bold" asChild>
            <Link to={"/login"}>
            <CircleUserRound className="me-2"/>
             Take the Jump
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
