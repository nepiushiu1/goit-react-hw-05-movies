import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [request, setRequest] = useState('');

  const handleChange = e => {
    setRequest(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(request);
    setRequest('');
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Please, type search"
        />
        <button type="submit">
          <label>Search</label>
        </button>
      </form>
    </header>
  );
};
