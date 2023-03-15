import React, { useEffect, useState } from "react";
import Select from "react-dropdown-select";
import styled from "styled-components";
import OutClick from "./OutClick";
import DatePicker from "react-datepicker";
import { createData } from "../../services/airtable.service";
import { tableConfig } from "../../utils/airtable";
import Loading from "../common/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  createStaff,
  selectLoading,
  selectSuccess,
  updateStaff,
} from "../../features/staffSlice";

function Modal({
  isModalOpened,
  handleCloseModal,
  departmentList,
  statusList,
  title,
  editingValue,
  type,
}) {
  const [errMsg, setErrMsg] = useState({});
  const [staffData, setStaffData] = useState({
    full_name: "",
    dob: new Date(),
    gender: "",
    phone: null,
    department: "",
    avatar: "",
    status: "",
  });
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const success = useSelector(selectSuccess);
  // const [loading, setLoading] = useState(false);
  // const StaffConfig = tableConfig("Staff");
  const handleInput = (e) => {
    setStaffData({ ...staffData, [e.target.name]: e.target.value });
  };
  const handleDatePicker = (value, name) => {
    setStaffData({ ...staffData, [name]: value });
  };
  const handleSelect = (value, name) => {
    setStaffData({ ...staffData, [name]: value[0].title });
  };
  const handleValidateForm = (data) => {
    // Name length > 2
    const errMsg = {};
    console.log("staffData", staffData);
    !data.full_name && (errMsg.nameError = "Nhập vào họ tên!");
    // staffData.Phone === ??? (errMsg.phoneError = "Nhập vào đúng chuẩn sdt");

    setErrMsg(errMsg);

    if (Object.keys(errMsg).length > 0) {
      return true; // have error
    }
    return false; // do not have error
  };
  const handleSubmit = async (e) => {
    // if (handleValidateForm()) return; //have error  -> prevent submit

    const defaultValue = editingValue?.fields;
    const data = {
      ...staffData, //properties in staffData which we not touch will keep intact
      dob: staffData.dob && new Date(staffData.dob).toDateString(),
    };
    if (handleValidateForm(data)) return; //have error  -> prevent submit
    console.log("value date", data);
    e.preventDefault();

    try {
      const result = await dispatch(
        type === "edit"
          ? updateStaff({
              record_id: defaultValue?.record_id,
              value: data,
            })
          : createStaff(data)
      );
      if (result) {
        handleCloseModal();
      }
    } catch (error) {}
  };
  useEffect(() => {
    const defaultValue = editingValue?.fields;
    // console.log("defaultDobValue: ", new Date().toLocaleDateString());

    setStaffData({
      ...staffData,
      full_name: defaultValue?.full_name,
      dob: new Date().toLocaleDateString(),
      gender: defaultValue?.gender,
      department: defaultValue?.department_name,
      phone: defaultValue?.phone,
      status: defaultValue?.status_name,
    });
  }, [editingValue]);
  return (
    <ModalWrapper isModalOpened={isModalOpened}>
      <ModalContent>
        {" "}
        <OutClick onOutClick={handleCloseModal}>
          <ModalBody>
            <div className="modal-body">
              <button
                type="button"
                className="close"
                onClick={handleCloseModal}
              >
                <span>x</span>
              </button>
              <div className="header">
                <div className="header-body">
                  <h1 className="header-title">{title}</h1>
                </div>
              </div>
              <div className="form-group">
                <label>Họ tên</label>
                {/* Tạo common component dùng chung */}
                <input
                  className="form-control"
                  type="text"
                  onChange={handleInput}
                  value={staffData.full_name}
                  name="full_name"
                />
                {errMsg?.nameError && (
                  <span className="badge badge-soft-danger">
                    {errMsg.nameError}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label>Ngày sinh</label>
                <DatePicker
                  selected={new Date(staffData.dob)}
                  onChange={(value) => {
                    handleDatePicker(value, "dob");
                  }}
                  dateFormat="dd-MM-yyyy"
                  name="dob"
                />
              </div>
              <div className="form-group">
                <label>Giới tính</label>
                <Select
                  placeholder="Chọn"
                  className="form-control"
                  options={[
                    { title: "Nam", id: 1 },
                    { title: "Nữ", id: 2 },
                  ]}
                  labelField="title"
                  valueField="id"
                  name="gender"
                  onChange={(value) => {
                    handleSelect(value, "gender");
                  }}
                />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="(___)___-___"
                  name="phone"
                  value={staffData.phone}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <label>Phòng ban</label>
                <Select
                  placeholder="Chọn"
                  className="form-control"
                  options={
                    departmentList &&
                    departmentList.map((item) => ({
                      department: item.fields.name,
                      id: item.fields.record_id,
                    }))
                  }
                  labelField="department"
                  valueField="department"
                  name="department"
                  onChange={(value) => {
                    handleSelect(value, "department");
                  }}
                />
              </div>
              <div className="form-group">
                <label>Trạng thái</label>
                <Select
                  placeholder="Chọn"
                  className="form-control"
                  options={
                    statusList &&
                    statusList.map((item) => ({
                      status: item.fields.name,
                      id: item.fields.record_id,
                    }))
                  }
                  labelField="status"
                  valueField="id"
                  name="status"
                  onChange={(value) => {
                    handleSelect(value, "status");
                  }}
                />
              </div>
            </div>
            <button
              className="btn btn-lg btn-primary btn-block"
              onClick={handleSubmit}
            >
              {loading ? <Loading /> : title}
            </button>
          </ModalBody>
        </OutClick>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s;

  ${({ isModalOpened }) =>
    isModalOpened &&
    `
      visibility: visible;
      opacity: 1;
    `}
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background: #fff;
  align-items: center;
  margin-left: auto;
  padding-bottom: 120px;
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 700px) {
    width: 60%;
  }
`;
export const ModalBody = styled.div`
  width: 280px;
`;
export const SelectWrapper = styled.div`
  width: 50%;
`;
