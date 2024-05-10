import { ChangeEvent, useState } from "react";

export function State() {
  const [text, setText] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>The text is: {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
