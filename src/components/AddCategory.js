import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleImputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length > 2) {
      props.onSetCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleImputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onSetCategories: PropTypes.func.isRequired,
};
