import React, {
  useState,
  useEffect,
  useReducer,
  lazy,
  Suspense,
  Fragment
} from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import DisplayMain from "./DisplayMain";
import Button from "./Button";

import "./index.css";

const initialState = new function() {
  this.currentPage = 1;
  this.pageSize = 10;
  this.totalPages = -1;
}();

const paginationReducer = (state, action) => {
  switch (action.type) {
    case "set_total_pages":
      return {
        ...state,
        totalPages: Math.ceil(action.payload / state.pageSize)
      };
    case "goto_page":
      return { ...state, currentPage: action.payload };
    case "next_page":
      return {
        ...state,
        currentPage:
          state.currentPage === state.totalPages
            ? state.currentPage
            : state.currentPage + 1
      };
    case "prev_page":
      return {
        ...state,
        currentPage:
          state.currentPage === 1 ? state.currentPage : state.currentPage - 1
      };
    case "first_page":
      return { ...state, currentPage: 1 };
    case "last_page":
      return { ...state, currentPage: state.totalPages };
    default:
      return state;
  }
};

const Home = () => {
  const [result, setResult] = useState([]);
  const [type, setType] = useState("anime");
  const [{ currentPage, pageSize, totalPages }, dispatch] = useReducer(
    paginationReducer,
    initialState
  );
  const handleSearch = search => {
    axios(`https://api.jikan.moe/v3/search/${type}?q=${search}`).then(res => {
      console.log(res.data.results);
      setResult(res.data.results);
      dispatch({ type: "set_total_pages", payload: res.data.results.length });
      dispatch({ type: "goto_page", payload: 1 });
    });
  };

  const handleSearchType = searchType => {
    setType(searchType);
    console.log(searchType);
  };

  const handleBtnClick = action => {
    dispatch(action);
  };

  const getStartIndex = () => {
    if (result.length === 0) return -1;
    return (currentPage - 1) * pageSize;
  };

  const getEndIndex = () => {
    if (result.length === 0) return -1;
    return currentPage * pageSize - 1 >= totalPages * pageSize - 1
      ? totalPages * pageSize - 1
      : currentPage * pageSize - 1;
  };

  const getPages = () => {
    let allButtons = [];
    for (let page = 1; page <= totalPages; page++) {
      allButtons.push(
        <Button
          value={page}
          onBtnClick={handleBtnClick}
          action={{ type: "goto_page", payload: page }}
          key={page}
        />
      );
    }
    return allButtons;
  };

  return (
    <div className="wrapper">
      <SearchBar
        onSearch={handleSearch}
        onSearchTypeChange={handleSearchType}
      />
      <DisplayMain
        result={result}
        startIndex={getStartIndex()}
        endIndex={getEndIndex()}
      />
      {result.length !== 0 && (
        <div className="pagination">
          <Button
            value="<<"
            onBtnClick={handleBtnClick}
            action={{ type: "first_page" }}
            isDisabled={currentPage === 1}
          />
          <Button
            value="<"
            onBtnClick={handleBtnClick}
            action={{ type: "prev_page" }}
            isDisabled={currentPage === 1}
          />

          {getPages()}
          <Button
            value=">"
            onBtnClick={handleBtnClick}
            action={{ type: "next_page" }}
            isDisabled={currentPage === totalPages}
          />
          <Button
            value=">>"
            onBtnClick={handleBtnClick}
            action={{ type: "last_page" }}
            isDisabled={currentPage === totalPages}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
