import React from "react";

const BookCard = ({ bookData }) => {
  return (
    <div>
      <div>
        <img src={bookData.img} alt="" width="40%" />
        <div>{bookData.book_name}</div>
        <div>{bookData.release_year}</div>
        <div>{bookData.category}</div>
      </div>
    </div>
  );
};

export default BookCard;
