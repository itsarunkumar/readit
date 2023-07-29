import {
  appwriteBucket,
  appwriteEndpoint,
  appwriteProjectId,
} from "@/lib/utils";
import { bytesToMB, convertToReadableDate } from "@/lib/utilityFunctions";

import { Client, Storage } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64b76125ede8ab6b92ff");

const storage = new Storage(client);

export const GET = async () => {
  const res = await storage.listFiles("64b76e54df9db91f5cf6");

  // console.log(res.files[0]);

  const files = res.files.map((file) => {
    return {
      id: file.$id,
      name: file.name,
      size: bytesToMB(file.sizeOriginal),
      url: `${appwriteEndpoint}/storage/buckets/${appwriteBucket}/files/${file.$id}/view?project=${appwriteProjectId}`,
      type: file.mimeType,
      createdAt: convertToReadableDate(file.$createdAt),
      updatedAt: convertToReadableDate(file.$updatedAt),
    };
  });

  return new Response(JSON.stringify(files));
};
