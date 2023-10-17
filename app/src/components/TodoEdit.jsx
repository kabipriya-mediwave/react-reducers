import React, { useState } from "react";

const TodoEdit = ({ text, onSave }) => {
  const [editedText, setEditedText] = useState(text);

  const handleSave = () => {
    onSave(editedText);
  };

  return (
    <div>
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default TodoEdit;
