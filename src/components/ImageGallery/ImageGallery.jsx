import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onOpenModal }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard
            src={item.urls}
            alt={item.alt_description}
            likes={item.likes}
            onOpenModal={() => onOpenModal(item)}
            // onClick={() => }
          />
        </li>
      ))}
    </ul>
  );
}
