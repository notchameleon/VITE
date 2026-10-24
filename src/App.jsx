import { useState } from "react";

export default function App() 
{
  const [text,setText] = useState("");

  return (
    <div className="card">
      <h1>Type Something (but I want this to change everytime)</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
        />
        <p>You typed: {text}</p>
        <p>{text.length} characters</p>
    </div>
  );
}