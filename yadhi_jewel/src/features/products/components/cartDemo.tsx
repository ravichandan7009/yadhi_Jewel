import { useReducer } from "react";

type State = {
    count: number
}

type Action = {
    type: 'increment' | 'decrement' | 'reset'
}

function CartDemo() {
    const initialState = {
        count: 0
    }

    function reducer(state: State, action: Action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
            case 'reset':
                return initialState
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    function increment() {
        dispatch({ type: 'increment' })
    }

    function decrement() {
        dispatch({ type: 'decrement' })
    }
    function reset() {
        dispatch({type : 'reset'} )
    }

    return(<><h2>Cart Demo</h2>
    <div>Count: {state.count}</div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick ={reset}>Reset</button>

    </>)
}
export default CartDemo;