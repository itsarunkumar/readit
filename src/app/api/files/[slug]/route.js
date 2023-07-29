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

export async function GET(request, { params }) {
  const slug = params.slug; // 'a', 'b', or 'c'
  console.log(slug);

  const file = await storage.getFile(appwriteBucket, slug);

  // console.log(file);

  const singlefile = {
    id: file.$id,
    name: file.name,
    size: bytesToMB(file.sizeOriginal),
    url: `${appwriteEndpoint}/storage/buckets/${appwriteBucket}/files/${file.$id}/view?project=${appwriteProjectId}`,
    type: file.mimeType,
    createdAt: convertToReadableDate(file.$createdAt),
    updatedAt: convertToReadableDate(file.$updatedAt),
  };

  // console.log(singlefile);

  return new Response(JSON.stringify(singlefile));
}
