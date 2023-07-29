import { apiurl } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import axios from "axios";
import Link from "next/link";

export default async function Dashboard() {
  const { data } = await axios.get(`${apiurl}/api/files`);

  return (
    <div className="w-5/6 flex justify-center items-center ">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>S.NO</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((file, index) => (
            <TableRow key={index} className="cursor-pointer">
              <TableCell>{index + 1}</TableCell>
              <TableCell>{file.name}</TableCell>
              <TableCell>{file.size}</TableCell>
              <TableCell>
                <Link href={`/${file.id}`}>View</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
