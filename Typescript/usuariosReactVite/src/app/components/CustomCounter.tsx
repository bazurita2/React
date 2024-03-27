import { useCounter } from "./hooks/useCounter";

export const CustomCounter = () => {
  const { counter, increase, decrease, reset } = useCounter();

  return (
    <>
      <div className="container m-5">
        <h1>Contador: {counter}</h1>
        <button className="btn btn-info" onClick={() => increase()}>
          Aumentar
        </button>
        <button className="btn btn-warning mx-2" onClick={() => decrease()}>
          Disminuir
        </button>
        <button className="btn btn-danger" onClick={() => reset()}>
          Resetear
        </button>
      </div>
    </>
  );
};
