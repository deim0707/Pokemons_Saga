import React, {FC} from "react";
import "./counter.scss"

const Counter: FC = () => {
    return (
        <div className="counter">
            <button>-</button>
            <div className="counter_value">1</div>
            <button>+</button>
        </div>
    )
}

export default Counter;
