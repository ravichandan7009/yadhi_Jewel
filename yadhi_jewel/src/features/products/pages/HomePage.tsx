import { useState } from 'react'
const HomePage = () => {

const [count, setCount] = useState(0);
alert(count)

function handleClick() {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);

}

return (
        <div>
            <h2>Home page</h2>
            <button onClick={handleClick}>Increment</button>
            <p>Current count: {count}</p>
        </div>
    )
}

export default HomePage
