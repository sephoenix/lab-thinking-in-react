import { useState } from 'react';

function SearchBar({ onFilter }) {
  const [input, setInput] = useState({ name: '' });

  const handleInput = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    onFilter({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        name="name"
        type="search"
        value={input.name}
        onChange={handleInput}
      />
    </div>
  );
}

export default SearchBar;
