// @refresh reload
import { createSignal, onMount } from "solid-js";
import "./app.css";

export default function App() {
  const [count, setCount] = createSignal(0);

  onMount(() => {
  })
  throw new Error('This is an example')

  return (
    <main>
      <h1>Hello world!</h1>
      <button class="increment" onClick={() => setCount(count() + 1)}>
        Clicks: {count()}
      </button>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
