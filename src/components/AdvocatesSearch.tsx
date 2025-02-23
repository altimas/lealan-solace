import Form from "next/form"
import SearchButton from "@/components/SearchButton"
import { Input } from "./Input"

export default function AdvocateSearch() {
    return (
        <>
        <h1 className="text-center text-3xl mt-2">Search Advocates</h1>
        
        <Form
            action="/"
            className="flex gap-2 items-center m-5"
        >
            <Input
                name="searchText"
                type="text"
                placeholder="Search Advocates"
                className="w-full"
            />
            <SearchButton />
        </Form>
        </>
    )
}