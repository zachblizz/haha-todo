import React, { useState, useCallback, ChangeEvent, useEffect, FormEvent } from "react";
import { useDispatch } from "react-redux";

import VisibleTodos from "./VisibleTodos";
import { add, init } from "./todoSlice";

import ShowFilters from "../filters/ShowFilters";

export default function Todo() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(init());
    }, [dispatch]);

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
        []
    );

    return (
        <div>
            <form onSubmit={(e: FormEvent) => {
                e.preventDefault();

                if (!!value.trim()) {
                    dispatch(add(value));
                    setValue("");
                }
            }}>
                <input
                    style={{ padding: "0.25rem", outline: "none", cursor: "pointer" }}
                    value={value}
                    onChange={handleChange}
                    placeholder="todo..."
                />
                <button
                    style={{
                        padding: "0.25rem",
                        marginLeft: 4
                    }}
                    type="submit"
                >
                    add
                </button>
            </form>
            <ShowFilters />
            <VisibleTodos />
        </div>
    )
}
