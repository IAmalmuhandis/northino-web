import classes from "./_searchBar.module.scss";
import { useState } from "react";
const SearchBar = () => {
  const { term, setTerm } = useState("");
  const termOnChangeHandler = (e) => {};
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <div className={classes.form__group}>
        <label htmlFor="video-search" className={classes.form__label}>
          Search
        </label>
        <input
          type="text"
          className={classes.form__input}
          placeholder="Search for Video"
          name="video-search"
          value={term}
          onChange={termOnChangeHandler}
        />
      </div>
    </form>
  );
};
export default SearchBar;
