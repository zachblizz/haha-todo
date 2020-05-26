import { MiddlewareAPI, Action } from "redux";
import { Dispatch } from "react";

// TODO: might be able to create an authorization middleware
export default function ReduxLogger(store: MiddlewareAPI<any>) {
    return function (dispatch: Dispatch<Action>) {
        return function(action: Action) {
            console.groupCollapsed("%cCHANGE", "border-radius: 2px; background: #0584E3; padding: 0.1rem 0.3rem; color: #fff", "- [" + action.type + "]", );
            console.log("%cPREV - ", "color: #0584E3;", store.getState());

            const change = dispatch(action);

            console.log("%cACTION - ", "color: #ff5252;", change);
            console.log("%cNEXT - ", "color: #55c84f", store.getState());
            console.groupEnd();

            return change;
        }
    }
}