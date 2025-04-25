"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Button } from "../ui/button";
import { useAuth } from "@/providers/AuthProvider";

export default function Header() {
  const authorised = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("token");
    authorised.setToken(null);
  };

  return (
    <div className="flex justify-between items-center h-[7vh] px-3 bg-gray-900 ">
      <div>
        {/* <Link href="/">
          <Button className="px-2 mr-3 rounded">Home</Button>
        </Link>
        <Link href="/about">
          <Button className="px-2 mr-3 rounded">About us</Button>
        </Link> */}
      </div>
      <div>
        {!authorised.isAuthenticated && (
          <Link href="/login" className="mr-2">
            <Button className="px-2 mr-3 rounded">Login</Button>
          </Link>
        )}
        {authorised.isAuthenticated && (
          <Button className="px-2 mr-3 rounded bg-gray-500 text-white" onClick={handleLogout}>
            Logout
          </Button>
        )}
        <ThemeToggle />
      </div>
    </div>
  );
}
