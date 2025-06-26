
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState([]);
  const cards = Array.from({ length: 78 }, (_, i) => i + 1);

  const pickCard = (num) => {
    if (selected.length >= 3 || selected.includes(num)) return;
    setSelected([...selected, num]);
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>Choose 3 Tarot Cards</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {cards.map((num) => (
          <img
            key={num}
            src={`/cards/card_${num}.png`}
            onClick={() => pickCard(num)}
            style={{
              width: 80,
              margin: 5,
              cursor: "pointer",
              border: selected.includes(num) ? "3px solid gold" : "1px solid #ccc"
            }}
          />
        ))}
      </div>
      {selected.length === 3 && (
        <div style={{ marginTop: 20 }}>
          <h2>Your Chosen Cards:</h2>
          {selected.map((num) => (
            <img
              key={num}
              src={`/cards/card_${num}.png`}
              style={{ width: 120, margin: 10 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
