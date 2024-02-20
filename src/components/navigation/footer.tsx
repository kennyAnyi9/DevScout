import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/lib/exports";

const Footer = () => {
  return (
    <footer
      className="flex flex-col 
    text-black-100 mt-5 top__liner p-8"
    >
      <div
        className="flex flex-col items-center
        flex-wrap justify-between gap-5 sm:px-16 px-6 py-10"
      >
        <h1 className="text-4xl font-bold">Stay Informed</h1>
        <p className="text-center">
          Interested in the future of the platform? <br /> Be the first to get
          updates on content, new features, and more!
        </p>
      </div>

      <div className="container flex flex-col-reverse justify-between gap-2 md:flex-row md:items-end">
        <span>
          Made with{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="inline-block h-5 w-5 text-[#31bdc6]"
          >
            <rect x="14" y="14" width="4" height="6" rx="2"></rect>
            <rect x="6" y="4" width="4" height="6" rx="2"></rect>
            <path d="M6 20h4"></path>
            <path d="M14 10h4"></path>
            <path d="M6 14h2v6"></path>
            <path d="M14 4h2v6"></path>
          </svg>{" "}
          by Kennedy Anyidoho.
        </span>
        <div className="flex items-center">
          <ModeToggle />
          <span className="px-2">|</span>
          <Link
            target="_blank"
            rel="noreferrer"
            className="group rounded-lg p-2"
            href="https://github.com/typehero/typehero"
          >
            <span className="sr-only">TypeHero on GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-5 w-5 duration-150 group-hover:scale-110 group-hover:fill-black dark:group-hover:fill-white"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            className="group rounded-lg p-2"
            href="https://twitter.com/typeheroapp"
          >
            <span className="sr-only">TypeHero on Twitter</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-5 w-5 duration-150 group-hover:scale-110 group-hover:fill-black dark:group-hover:fill-white"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
