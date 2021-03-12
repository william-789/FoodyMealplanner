import React from "react";

const Filter = (handleChange) => {
  return (
    <form>
      <p className="title">Select your diet:</p>
      <ul>
        <li>
          <label>
            <input type="radio" value="Standard" onChange={handleChange} />
            Standard
          </label>
        </li>

        <li>
          <label>
            <input type="radio" value="Vegetarian" onChange={handleChange} />
            Vegetarian
          </label>
        </li>

        <li>
          <label>
            <input type="radio" value="Vegan" onChange={handleChange} />
            Vegan
          </label>
        </li>
      </ul>

      <button type="submit" className="submit-button">
        Make your choice
      </button>
    </form>
  );
};

export default Filter;
