import React, { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { connect } from "react-redux";

import { RootState } from "../../features/reducer";

import { addTodo, removeTodo, toggleTodo } from "../../old-reduxy/actions/old-todo-actions";
import { TodoType } from "../../utils/types";
import { PayloadAction } from "@reduxjs/toolkit";

import TodoList from "../../features/todo/TodoList";

const mapStateToProps = (state: RootState) => ({ todos: state.oldTodo });
const mapDispatchToProps = {
    addTodo,
    removeTodo,
    toggleTodo
};

type Props = {
    todos: TodoType[];
    addTodo: (value: string) => PayloadAction<string>;
    removeTodo: (id: number) => PayloadAction<number>;
    toggleTodo: (id: number) => PayloadAction<number>;
}

function OldTodo({ todos, addTodo, removeTodo, toggleTodo }: Props) {
    const [value, setValue] = useState("");

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, [])

    return (
        <div>
            <form
                onSubmit={(e: FormEvent) => {
                    e.preventDefault();
                    addTodo(value);
                }}
            >
                <input id="todoInput" placeholder="todo..." onChange={handleChange} />
                <button type="submit">add</button>
            </form>
            <TodoList
                todos={todos ?? []}
                toggle={toggleTodo}
                remove={removeTodo}
            />
        </div>
    );
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(OldTodo);
