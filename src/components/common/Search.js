import React from "react";

function Search() {
  return (
    <form>
      <div className="input-group input-group-flush input-group-merge">
        <input
          type="search"
          className="form-control form-control-prepended list-search"
          placeholder="Tìm kiếm"
        />

        <div className="input-group-prepend">
          <div className="input-group-text">
            <span className="fe fe-search"></span>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Search;
