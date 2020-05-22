import React from "react";
import { useDispatch } from "react-redux";

import { Filters, setVisability } from "./filtersSlice";

type Props = {
    filter: Filters;
    disabled: boolean;
}

export default function FilterBtn({ filter, disabled }: Props) {
    const dispatch = useDispatch();

    return (
        <button
            style={{
                textTransform: "lowercase",
                padding: "0.25rem",
                margin: 4,
                cursor: "pointer"
            }}
            onClick={() => dispatch(setVisability(filter))}
            disabled={disabled}
        >
            { filter }
        </button>
    )
}
