import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="header-body">
          <div className="row align-items-center">
            <div className="col">
              <h6 className="header-pretitle">Tổng quan</h6>
              <h1 className="header-title">Bảng điều khiển</h1>
            </div>
          </div>
          <div className="row align-item-center">
            <div className="col">
              <ul className="nav nav-tabs nav-overflow header-tabs">
                <FeatureWrapper>
                  <FeatureButton>
                    <li className="nav-item">
                      <Link to="" className="nav-link">
                        Quản trị thông tin
                      </Link>
                    </li>
                  </FeatureButton>
                </FeatureWrapper>
                <FeatureWrapper>
                  <FeatureButton>
                    <li className="nav-item">
                      {" "}
                      <Link to="" className="nav-link">
                        Quản trị phòng ban
                      </Link>
                    </li>
                  </FeatureButton>
                </FeatureWrapper>
                <FeatureWrapper>
                  <FeatureButton>
                    <li className="nav-item">
                      <Link to=" " className="nav-link">
                        Quản trị phương thức chấm công
                      </Link>
                    </li>
                  </FeatureButton>
                </FeatureWrapper>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureWrapper = styled.section`
  background-color: #f9fbfd;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeatureButton = styled.button`
  border-radius: 20px;
  background-color: #fff;
  padding: 18px 30px;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  border: none;
`;

export default Navbar;
