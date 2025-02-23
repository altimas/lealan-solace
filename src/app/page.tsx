

import AdvocatesSearch from "@/components/AdvocatesSearch";
import AdvocatesTable from "@/components/AdvocatesTable";

export const metadata = {
  title: "Advocate Search",
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const {searchText } = await searchParams;

  if (!searchText) return <AdvocatesSearch />
  const results = await fetch(`http://localhost:3000/api/advocates?searchTerm=${searchText}`).then((response) => response.json()).then((res) => res.data);
    return (
        <>
            <AdvocatesSearch />
            {results.length ? <AdvocatesTable data={results} /> : (
                <p className="mt-4">No results found</p>
            )}
        </>
    )
}
