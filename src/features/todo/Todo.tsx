import React, { useState, useCallback, ChangeEvent, useEffect } from "react";
import { useDispatch } from "react-redux";

import TodoList from "./TodoList";
import { add, init } from "./todoSlice"; 

export default function Todo() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(init());
    }, [dispatch]);

    const handleChange = useCallback(
        ({ target }: ChangeEvent<HTMLInputElement>) => setValue(target.value),
        []
    );

    return (
        <div>
            <input
                style={{ padding: "0.25rem", outline: "none" }}
                value={value}
                onChange={handleChange}
                placeholder="todo..."
            />
            <button
                style={{
                    padding: "0.25rem",
                    marginLeft: 4
                }}
                onClick={() => {
                    if (!!value === true) {
                        dispatch(add(value));
                        setValue("");
                    }
                }}
            >
                add
            </button>
            <TodoList />
        </div>
    )
}
