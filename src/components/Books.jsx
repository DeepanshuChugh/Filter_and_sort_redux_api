import styled from "styled-components";
import FilterSort from "./FilterSort";
import BookLists from "./BookLists";

const Books = () => {
  return (
    <div>
      <h2>Books</h2>
      <BookPageWrapper>
        <FilterSortWrapper>
          <FilterSort />
        </FilterSortWrapper>
        <BookListWrapper>
          <BookLists />
        </BookListWrapper>
      </BookPageWrapper>
    </div>
  );
};

export default Books;

const BookPageWrapper = styled.div`
  display: flex;
`;

const FilterSortWrapper = styled.div`
  width: 300px;
  border: 1px solid red;
`;
const BookListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, max-content));
  gap: 16px;
  width: 100%;
  justify_content: center;
  border: 1px solid green;
  padding: initial;
  background-color: red;
`;
