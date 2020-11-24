import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../Redux/reducer";
import {changeCounter} from "./redux/counterActions";

interface Returned {
    value: number,
    methods: {
        decr: Function
        incr: Function
    }
}

const useCounter = (): Returned => {
    const dispatch = useDispatch();

    const {counter_value} = useSelector((state: RootState) => state.counter);

    const decrValue = () => dispatch(changeCounter(counter_value-1))
    const incrValue = () => dispatch(changeCounter(counter_value+1))

    return {
        value: counter_value,
        methods: {
            decr: decrValue,
            incr: incrValue
        }
    }

}

export default useCounter;
