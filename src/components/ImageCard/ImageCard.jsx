import css from "./ImageCard.module.css";

export default function ImageCard({ src, alt, likes, onOpenModal }) {
  return (
    <div className={css.imgContainer}>
      <img
        src={src.small}
        alt={alt}
        onClick={onOpenModal}
        className={css.img}
        width={400}
        height={260}
      />
      <p className={css.imgP}>Likes: {likes}</p>
    </div>
  );
}
