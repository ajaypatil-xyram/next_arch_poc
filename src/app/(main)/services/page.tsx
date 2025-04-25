'use client';

import { getUserService } from "@/lib/services/users.service";
import { useEffect, useState } from "react";

export default function Services() {
  const [state, setState] = useState<string[]>([]);
  const getUserList = async () => {
    const data = await getUserService();
    setState(data.users);
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div className="dark:bg-gray-700 dark:text-white p-5">
      <h1 className="text-2xl font-bold mb-2">Services</h1>
      <div className="border border-gray-500 rounded p-5">
        <ul>
          {state.map((user, index) => {
            return <li key={`${user}-${index}`}>{user}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
