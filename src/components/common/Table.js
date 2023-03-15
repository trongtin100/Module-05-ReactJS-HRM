import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Search from "./Search";
import PropTypes from "prop-types";
import DropdownSort from "./DropdownSort";

function Table({ list, departmentList, statusList }) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [editingValue, setEditingValue] = useState(null);
  const handleOpenEdit = (item) => {
    setIsModalOpened(true);
    setEditingValue(item);
  };
  const handleCloseEdit = () => {
    setIsModalOpened(false);
  };
  const handleSelect = (value, name) => {
    setEditingValue({ ...editingValue, [name]: value[0].title });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage; // 1 * 5 = 5
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 5 - 5 = 0
  const currentItems = list?.slice(indexOfFirstItem, indexOfLastItem); //depent on first/last page, current list will difference
  const pageNumbers = [];

  const handlePageNumbers = () => {
    for (let i = 1; i <= Math.ceil(list?.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };
  const handleClickPage = (e) => {
    setCurrentPage(e.target.id);
  };
  const handlePrevious = () => {
    if (currentPage > Math.min(...pageNumbers)) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < Math.max(...pageNumbers)) setCurrentPage(currentPage + 1);
  };
  const renderPageNumbers = handlePageNumbers().map((number) => {
    return (
      <li onClick={handleClickPage} className="page-item page-link" id={number}>
        {number}
      </li>
    );
  });
  const handleDropdownSort = (value) => {
    // check option value, if value = 1 => sort list by ID descending
    // continue for case -1, 0
    switch (value) {
      case -1:
        break;
      case 0:
        break;
      case 1:
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Modal
        departmentList={departmentList}
        statusList={statusList}
        isModalOpened={isModalOpened}
        handleCloseModal={handleCloseEdit}
        title="Sửa nhân sự"
        editingValue={editingValue}
        type="edit"
      />
      <div className="card mt-3">
        <div className="card-header">
          <div className="row align-items-center">
            <div className="col">
              <Search onFilter={() => {}} />
            </div>
            <DropdownSort handleDropdownSort={handleDropdownSort} />{" "}
          </div>
        </div>
      </div>

      <TableWrapper>
        <div className="card">
          <div
            className="table-responsive mb-0"
            data-list='{"valueNames": ["goal-project", "goal-status", "goal-progress", "goal-date"]}'
          >
            <table className="table table-sm table-nowrap card-table">
              <thead>
                <tr>
                  <th>
                    <a href="/" className="text-muted list-sort">
                      Mã nhân sự
                    </a>
                  </th>
                  <th>
                    <a href="/" className="text-muted list-sort">
                      Tên nhân sự
                    </a>
                  </th>
                  <th>
                    <a href="/" className="text-muted list-sort">
                      Ngày sinh
                    </a>
                  </th>
                  <th>
                    <a href="/" className="text-muted list-sort">
                      Giới tính
                    </a>
                  </th>
                  <th>
                    <a href="/" className="text-muted list-sort">
                      Phòng ban
                    </a>
                  </th>
                  <th>
                    <a href="/" className="text-muted list-sort">
                      Số điện thoại
                    </a>
                  </th>
                  <th>
                    <a href="/" className="text-muted list-sort">
                      Trạng thái
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody className="list">
                {currentItems &&
                  currentItems.map((item) => (
                    <tr
                      className="item-row"
                      key={item.fields.id}
                      onClick={() => {
                        handleOpenEdit(item);
                      }}
                    >
                      <td>
                        <span>{item.fields.id}</span>
                      </td>
                      <td>
                        <span>{item.fields.full_name}</span>
                      </td>
                      <td>
                        <span>{item.fields.dob}</span>
                      </td>
                      <td>
                        <span>{item.fields.gender}</span>
                      </td>
                      <td>
                        {item.fields.department_name &&
                          item.fields.department_name.map((item) => (
                            <span key={item}>{item}</span>
                          ))}
                      </td>
                      <td>
                        <span>{item.fields.phone}</span>
                      </td>
                      <td>
                        {item.fields.status_name &&
                          item.fields.status_name.map((item) => (
                            <span key={item}>{item}</span>
                          ))}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </TableWrapper>
      <PaginationWrapper>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" onClick={handlePrevious}>
                Trước
              </a>
            </li>
            {renderPageNumbers}
            <li className="page-item">
              <a className="page-link" onClick={handleNext}>
                Sau
              </a>
            </li>
          </ul>
        </nav>
      </PaginationWrapper>
    </>
  );
}

// Default Props if not pass props
Table.defaultProps = {
  list: [],
};

// Type of Default Props when passing
Table.propTypes = {
  list: PropTypes.array,
};

export const TableWrapper = styled.div`
  *:hover {
    cursor: pointer;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default Table;
