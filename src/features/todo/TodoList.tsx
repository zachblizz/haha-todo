import React from "react";
import { PayloadAction } from "@reduxjs/toolkit";

import { TodoType } from "../../utils/types";

type Props = {
    todos: TodoType[];
    toggle: (id: number) => PayloadAction<number>;
    remove: (id: number) => PayloadAction<number>;
}

export default function TodoList({ todos, toggle, remove }: Props) {
    if (!todos || todos.length === 0) {
        return <div>Such emptiness</div>;
    }

    return (
        <div>
            {todos?.map((t: TodoType) =>
                <div
                    key={t.id}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <input
                        id={`done${t.id}`}
                        type="checkbox"
                        checked={t.complete}
                        onChange={() => toggle(t.id)}
                    />
                    <label
                        htmlFor={`done${t.id}`}
                        style={{
                            textDecoration: t.complete ? "line-through" : "",
                            cursor: "pointer",
                            margin: 5,
                        }}
                    >
                        {t.value}
                    </label>
                    <button
                        style={{
                            border: "none",
                            background: "#ff5252",
                            color: "#fff",
                            padding: "0.25rem",
                            cursor: "pointer",
                        }}
                        onClick={() => remove(t.id)}
                    >
                        delete
                    </button>
                </div>
            )}
        </div>
    )
}
