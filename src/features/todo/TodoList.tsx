import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { TodoType, toggle, remove } from "./todoSlice";

export default function TodoList() {
    const todos = useSelector((state: any) => state.todo);
    const dispatch = useDispatch();

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
                            onClick={() => dispatch(toggle(t.id))}
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
                            onClick={() => dispatch(remove(t.id))}
                        >
                            delete
                        </button>
                    </div>
                )}
            </div>
    )
}
