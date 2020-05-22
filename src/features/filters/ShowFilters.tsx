import React from "react";
import { useSelector } from "react-redux";

import FilterBtn from "./FilterBtn";

export default function Filters() {
    const filter = useSelector((state: any) => state.filter);

    return (
        <div>
            <FilterBtn disabled={filter === "ALL"} filter="ALL" />
            <FilterBtn disabled={filter === "COMPLETE"} filter="COMPLETE" />
            <FilterBtn disabled={filter === "TODO"} filter="TODO" />
        </div>
    );
}
