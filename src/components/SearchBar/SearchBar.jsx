import { toast } from "react-hot-toast";
import css from "../SearchBar/SearchBar.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function Search({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.query.value;
    if (query.trim() === "") {
      return toast.error("This field can't be empty!");
    }
    onSubmit(query.trim());
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.field}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      <ErrorMessage />
    </header>
  );
}
