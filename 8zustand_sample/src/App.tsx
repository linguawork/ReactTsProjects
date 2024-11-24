import React from 'react';
import { create } from 'zustand';
import './App.css';

interface ForStore {
  count: number; 
  increment: ()=> void;
  decrement: ()=> void;
}

// Step 1: Create a store
const useStore = create<ForStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// Step 2: Use the store in components
function Counter() {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// export default Counter;






function App() {
  return (
    <div className="App">
      <Counter/>
  
    </div>
  );
}

export default App;
