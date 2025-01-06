import { useState } from "react";

export default function Player({ name, symbol }) {
  const [pName, setPName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPName(event.target.value);
  }

  let playerName = <span className="player-name">{pName}</span>;

  if (isEditing) {
    playerName = (
      <input type="text" required value={pName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
