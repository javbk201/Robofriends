import React from "react";

const SearchBox = ({ searchfield, searchChange }) =>{
  return(
    <div className="pa2">
      <input className="tc bg-light-blue br3 pa3 ma2 bw2"
        type="search"
        placeholder="search"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
