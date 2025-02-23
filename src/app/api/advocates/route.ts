import db from "../../../db";

export async function GET(req: Request) {
 const url = new URL(req.url);
 const searchTerm = url.searchParams.get("searchTerm") || "";

 try {
  const { getAdvocates } = db;

  const advocates = await getAdvocates(searchTerm);

  const parsedAdvocates = advocates.map((advocate) => advocate.records)

  return new Response(
    JSON.stringify({data: parsedAdvocates}), { status: 200, headers: { "Content-Type": "application/json"}});


 } catch (error) {
  return new Response(
    JSON.stringify({error: error}),
    {status: 500}
  )
 }
}
