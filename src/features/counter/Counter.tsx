import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "./counterSlice";

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state: any) => state.counter);

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}
