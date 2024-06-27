import { getAll } from "@/utils/db";

export async function GET() {
  const id = await getAll();
  console.log(id);
  return new Response(JSON.stringify(id));
}
