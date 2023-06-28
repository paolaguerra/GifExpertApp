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
      {/* <input
        type="text"
        placeholder="search gif"
        value={inputValue}
        onChange={handleImputChange}
      /> */}
      <div className="input-group flex-nowrap">
        <input
          type="text"
          className="form-control"
          placeholder="search gif"
          value={inputValue}
          onChange={handleImputChange}
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
    </form>
  );
};

AddCategory.propTypes = {
  onSetCategories: PropTypes.func.isRequired,
};
