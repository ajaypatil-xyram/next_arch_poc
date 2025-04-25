"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useAuth } from "@/providers/AuthProvider";
import { loginService } from "@/lib/services/auth.service";
import { LoginCredentials } from "@/lib/controllers/auth.controller";
import toast from "react-hot-toast";

export default function () {
  const router = useRouter();
  const auth = useAuth();
  const [formData, setFormData] = useState<LoginCredentials>({
    username: "",
    password: "",
  });
  const [disabled, setDisabled] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setDisabled(true);
      const res = await loginService(formData);
      localStorage.setItem("token", res.token);
      auth.setToken(res.token);
      router.push("/");
    } catch (error) {
      setDisabled(false);
    }
  };

  return (
    <div className="h-[90vh] flex justify-center items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="w-[35%] h-[50%] shadow-lg p-8 rounded dark:bg-slate-500 flex flex-col justify-center items-center">
        <h1 className="font-semibold text-4xl flex justify-center">Login</h1>
        <div className="p-5 flex justify-center">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="username"
                id="username"
                required
                className="dark:bg-gray-200 dark:text-black"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Input
                type="password"
                id="password"
                placeholder="password"
                required
                className="dark:bg-gray-200 dark:text-black"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
              <Button type="submit" disabled={disabled}>
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
