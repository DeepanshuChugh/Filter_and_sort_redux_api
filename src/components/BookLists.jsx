import React from "react";
import BookCard from "./BookCard";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../Redux/action";
import { useLocation, useSearchParams } from "react-router-dom";

const BookLists = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // useEffect(() => {
  //   const sortBy = searchParams.get("sortBy");
  //   const getTodoParams = {
  //     params: {
  //       category: searchParams.getAll("category"),
  //       _sort: "release_year",
  //       _order: sortBy,
  //     },
  //   };
  //   if (books.length === 0 || location.search) {
  //     dispatch(getBooks(getTodoParams));
  //   }
  // }, [location.search, books.length, dispatch, searchParams]);

  useEffect(() => {
    if (!books.length || location.search) {
      const sortBy = searchParams.get("sortBy");

      const getBooksParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortBy && "release_year",
          _order: sortBy,
        },
      };
      dispatch(getBooks(getBooksParams));

      //if deselect all filter
    } else if (location.search === "") {
      dispatch(getBooks());
    }
  }, [location.search]);

  return (
    <>
      {books.length > 0 &&
        books.map((book) => {
          return (
            <BookCardWrapper key={book.id}>
              <BookCard bookData={book} />
            </BookCardWrapper>
          );
        })}
    </>
  );
};

export default BookLists;

const BookCardWrapper = styled.div`
border 1px solid blue;
width:220px;
padding:25px;
`;
