import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.loadBtn}>
      <button className={css.btn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
