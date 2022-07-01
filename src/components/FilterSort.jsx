import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getBooks } from "../Redux/action";
// import styled from "styled-components";

const FilterSort = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const URLcategory = searchParams.getAll("category");
  const URLsortBy = searchParams.getAll("sortBy");

  const [category, setCategory] = useState(URLcategory || []);
  const [sortBy, setSortBy] = useState(URLsortBy || null);

  const handleCheckBox = (e) => {
    const option = e.target.value;
    let newCategory = [...category];
    if (newCategory.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleRadio = (e) => {
    setSortBy(e.target.value);
  };

  // useEffect(() => {
  //   if (category || sortBy) {
  //     setSearchParams({ category });
  //     // dispatch(getBooks({ params: { category } }));
  //   }
  // }, [category, setSearchParams]);

  // useEffect(() => {
  //   if (sortBy) {
  //     const param = {
  //       category: searchParams.getAll("category"),
  //       sortBy,
  //     };
  //     setSearchParams(param);
  //   }
  // }, [sortBy, setSearchParams, searchParams]);

  useEffect(() => {
    if (category || sortBy) {
      let params = {};
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
      // dispatch(getBooks({ params: { category } }));
    }
  }, [category, searchParams, sortBy]);

  return (
    <div>
      <h3>Filter Sort</h3>
      <div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckBox}
            value="Novel"
            defaultChecked={category.includes("Novel")}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckBox}
            value="Motivational"
            defaultChecked={category.includes("Motivational")}
          />
          <label>Motivational</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckBox}
            value="Thriller"
            defaultChecked={category.includes("Thriller")}
          />
          <label>Thriller</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckBox}
            value="Science"
            defaultChecked={category.includes("Science")}
          />
          <label>Science</label>
        </div>
      </div>
      <h3>Sort</h3>
      <div onChange={handleRadio}>
        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sortBy === "asc"}
        />
        Ascending
        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sortBy === "desc"}
        />
        Descending
      </div>
    </div>
  );
};

export default FilterSort;
// const FilterWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   width: 100%;
//   justify-content: flex-start;
//   border: 1px solid black;
// `;
