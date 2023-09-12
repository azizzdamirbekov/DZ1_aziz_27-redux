import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter () {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)


    const minusBtn = () => {
        dispatch({
            type: "DECREMENT"
        })
    }

    const plusBtn = () => {
        dispatch({
            type: "INCREMENT"
        })
    }

    return (
        <div className="counter">
            <button className="increment" type="button" onClick={plusBtn}>+</button>
            <div className="count">{count}</div>
            <button className="decrement" type="button" onClick={minusBtn}>-</button>
        </div>
    )
}

export default Counter