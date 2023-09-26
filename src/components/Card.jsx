function Card({ number, onHigher, onLower }) {
  return (
    <div className="card">
      <h1>{number}</h1>
      <button onClick={onHigher}>Higher</button>
      <button onClick={onLower}>Lower</button>
    </div>
  );
}

export default Card;
