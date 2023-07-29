import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const apiurl = process.env.APIURL;
export const appwriteBucket = process.env.APPWRITE_BUCKETID;
export const appwriteEndpoint = process.env.APPWRITE_ENDPOINT;
export const appwriteProjectId = process.env.APPWRITE_PROJECTID;
export const appwriteApiKey = process.env.APPWRITE_APIKEY;
