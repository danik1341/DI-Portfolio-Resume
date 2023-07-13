import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Daniel",
  description: "This is my developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "min-h-screen flex flex-col text-slate-700 " + poppins.className
        }
      >
        <header className="flex p-4 sm:p-6 border-b">
          <div className="flex items-center font-medium text-sm max-w-[900px] mx-auto w-full hover:font-semibold">
            <Link href={"/"} className="hidden sm:inline">
              Daniel Yakovizki
            </Link>
            <Link href={"/"} className="sm:hidden">
              DY
            </Link>
          </div>
        </header>

        <div className="overflow-hidden flex-grow">{children}</div>

        <footer className="flex items-center justify-center flex-col p-8 py-16 space-y-6 text-slate-600 text-sm font-semibold border-t w-full mt-auto">
          <div className="flex items-center justify-center space-x-4">
            <a
              href={"Resume.pdf"}
              download
              target="_blank"
              className=" hover:text-sky-400"
            >
              PDF Resume
            </a>
            <p>|</p>
            <Link href={"/projects"} className="hover:text-sky-400">
              Projects
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href={"https://www.linkedin.com/in/daniel-yakovizki-336905233/"}
              target="_blank"
              className=" text-slate-700 hover:text-sky-400"
            >
              <BsLinkedin className="text-4xl" />
            </a>
            <a
              href={"https://github.com/danik1341"}
              target="_blank"
              className=" text-slate-700 hover:text-sky-400"
            >
              <BsGithub className="text-4xl" />
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
