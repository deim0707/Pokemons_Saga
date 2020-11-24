import React, {FC} from "react";
import useCounter from "./useCounter.hook";
import "./counter.scss"


const Counter: FC = () => {

    const {value, methods} = useCounter();

    return (
        <div className="counter">
            <button onClick={() => methods.decr()}>-</button>
            <div className="counter_value">{value}</div>
            <button onClick={() => methods.incr()}>+</button>
        </div>
    )
}

export default Counter;
