
/**
In your example:

The parent component holds the state using the useState hook and defines the function to update that state (e.g., handleIncrement).

The child component receives the state and the function via props, and it can trigger the state change by invoking the function when an event occurs (like clicking the button).

The key idea is that state lives in the parent component, and the child component only has the responsibility of displaying the state and triggering updates by calling functions passed down from the parent. This is the standard pattern for parent-controlled state in React.

Parent-controlled state: The parent component owns the state and passes it down to the child via props. The child component can interact with the state (for example, by calling a function passed down from the parent to update the state), but it doesn't directly manage it.

Child-controlled state: The child component owns and manages its own state using a hook like useState. The parent might pass data or functions as props, but the child is responsible for its state.


*/

import React, {useState} from 'react';
import './App.css';

interface CounterProps {
  count: number;
  functionTemplate: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, functionTemplate }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={functionTemplate}>Increment</button>
  </div>
);

//export default Counter;





const ParentComponent = () => {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => setCount(count + 1);
  
  return <Counter count={count} functionTemplate={handleIncrement} />;
};

//export default ParentComponent;






function App() {
  return (
    <div className="App">
      <ParentComponent/>
    </div>
  );
}

export default App;


