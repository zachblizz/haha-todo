import { createSelector } from "@reduxjs/toolkit"
import { connect } from "react-redux";

import { TodoType, remove, toggle } from "./todoSlice";

import TodoList from "./TodoList";
import { RootState } from "../reducer";

const selectTodos = (state: RootState) => state.todo;
const selectFilter = (state: RootState) => state.filter;

const visibleTodos = createSelector(
    [selectTodos, selectFilter],
    (todos, filter) => {
        switch (filter) {
            case "ALL":
                return todos;
            case "COMPLETE":
                return todos.filter((t: TodoType) => t.complete);
            case "TODO":
                return todos.filter((t: TodoType) => !t.complete);
        }
    }
);

const mapStateToProps = (state: RootState) => ({ todos: visibleTodos(state) });
const mapDispatchToProps = { toggle, remove }

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
