import { AxiosError } from "axios";
import { clsx, type ClassValue } from "clsx";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ApiFunction<T extends any[], R = void> = (...args: T) => Promise<R>;

export function errorHandler<T extends any[], R = void>(
  fn: ApiFunction<T, R>
): ApiFunction<T, R> {
  return async (...args: T): Promise<R> => {
    try {
      return await fn(...args);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message ?? error.message, {
          duration: 3000,
        });
      } else {
        toast.error("Unexpected Error");
        console.error("Unexpected Error:", error);
      }
      throw error;
    }
  };
}
