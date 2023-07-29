import { apiurl } from "@/lib/utils";
import axios from "axios";
import Image from "next/image";

export default async function SingleFile({ params }) {
  const { data } = await axios.get(`${apiurl}/api/files/${params.file}`);

  console.log(data);

  return (
    <>
      <div>SingleFile</div>
      <span>{params.file}</span>
      <h4>{data.name}</h4>
      <Image src={data.url} width={200} height={200} />
    </>
  );
}
