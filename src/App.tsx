import "./styles.css";

type Props = {
  value: number;
};

export default function App({ value }: Props) {
  return (
    <div className="App">
      <p>Clicked: times</p>
      <button>+</button>
      <button>-</button>
    </div>
  );
}
