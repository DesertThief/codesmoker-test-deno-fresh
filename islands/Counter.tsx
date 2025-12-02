import { useSignal } from "@preact/signals";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const count = useSignal(props.start);
  
  return (
    <div class="counter">
      <h2>Interactive Counter (Island)</h2>
      <p>Count: {count}</p>
      <div class="counter-buttons">
        <button onClick={() => count.value--}>-1</button>
        <button onClick={() => count.value++}>+1</button>
      </div>
    </div>
  );
}
