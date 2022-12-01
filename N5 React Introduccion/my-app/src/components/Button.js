import '../styles/index.css';

export const ButtonComponent = ({ setCounter, counter, value}) => {
  const handleClick = () => {
    setCounter(counter + value);
  };

  return (
    <button className="boton" onClick={handleClick}>
      <p>{value}</p>
    </button>
  );
};
