import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

import { apiurl } from "@/lib/utils";

export default async function Home() {
  const session = await getServerSession(options);

  const res = await fetch(`${apiurl}/api/ex`);

  console.log(await res.json());

  if (!session) {
    console.log("no session");
  }

  return (
    <div>
      <h1>{session?.user?.name}</h1>
      <h4>Home</h4>
    </div>
  );
}
