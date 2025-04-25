"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Routes } from "@/lib/types/interfaces";

export default function Header2() {
  const pathname = usePathname();
  const pathLink = (path: Routes) => {
    const sanitizeString = () => {
        const removeslash = path.slice(1);
        const removeUnderScores = removeslash.split("_").map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");

        return removeUnderScores;
    };
    return (
      <Link
        className={`mr-9 font-bold pb-3 px-2 ${
          pathname === path && "text-blue-500 border-b-3 border-gray-400"
        }`}
        href={path}
      >
        <div>{sanitizeString()}</div>
      </Link>
    );
  };
  return (
    <div className="px-5 dark:bg-gray-700">
      <div className="border-b-1 flex py-5">
        {pathLink(Routes.SERVICES)}
        {pathLink(Routes.PLANS)}
        {pathLink(Routes.ACCOUNTS_MANAGER)}
        {pathLink(Routes.FACILITY)}
      </div>
    </div>
  );
}
