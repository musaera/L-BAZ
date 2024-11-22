import React from "react";

const Filter = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={handleInputChange}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default Filter;
