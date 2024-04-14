// import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

// import css from "./App.module.css";

export default function App() {
  return (
    <div>
      <SearchBar />
      <Loader />
      <ImageGallery />
      <LoadMoreBtn />
      <ImageModal />
      <ErrorMessage />
    </div>
  );
}
