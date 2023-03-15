import React, { useState } from "react";

function DropdownSort({ handleDropdownSort }) {
  const [isShow, setIsShow] = useState(false);

  const handleSort = (e) => {
    handleDropdownSort(e.target.value);
  };
  const handleDropdown = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="dropdown show">
      <button
        className="btn btn-sm btn-white"
        type="button"
        onClick={handleDropdown}
      >
        <i className="fe fe-sliders mr-1"></i> Sắp xếp{" "}
        <span className="badge badge-primary ml-1 d-none">0</span>
      </button>
      <form
        className={`dropdown-menu dropdown-menu-right dropdown-menu-card ${
          isShow && "show"
        }`}
      >
        <div className="card-header">
          <h4 className="card-header-title">Sắp xếp</h4>
        </div>
        <div className="card-body">
          <div className="list-group list-group-flush mt-n4 mb-4">
            <div className="list-group-item">
              <div className="row">
                <div className="col">
                  <small>Mã nhân viên</small>
                </div>
                <div className="col-auto">
                  <select
                    className="form-control"
                    name="item-title"
                    onChange={handleSort}
                  >
                    <option value={-1}>Tất cả</option>
                    <option value={0}>Giảm dần</option>
                    <option value={1}>Tăng dần</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

DropdownSort.propTypes = {};

export default DropdownSort;
