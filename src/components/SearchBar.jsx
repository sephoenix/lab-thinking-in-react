import { useState } from 'react';

function SearchBar(props) {
  const [input, setInput] = useState();

  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
    props.filterProducts(e.target.value);
  };

  return (
    <div>
      <input type="search" value={input} onChange={handleInput} />
    </div>
  );
}

export default SearchBar;
