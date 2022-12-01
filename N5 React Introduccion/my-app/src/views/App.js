import { CounterApp } from "../components/Counter";
import { FakeStoreApi } from "../components/FakeStoreApi";

export const App = () => {
  return <div className="App">
    <FakeStoreApi />
  </div>;
};
