"use client"

import { useFormStatus } from "react-dom"
import Button from "./Button"

export default function SearchButton() {
    const status = useFormStatus()

    return (
        <Button
            type="submit"
            disabled={status.pending}
            className="w-20"
        >
            {status.pending ? (
                "Loading.."
            ) : "Search"}
        </Button>
    )
}