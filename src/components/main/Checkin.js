import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Clock from "../common/Clock";

function Checkin() {
  return (
    <div className="main-content">
      <div className="header">
        <img className="" src="./assets/img/covers/profile-cover-1.jpg" />

        <div>
          <div className="header-body mt-md-n6">
            <HeaderBodyWrapper>
              <div className="col-auto">
                <div className="avatar avatar-xxl header-avatar-top">
                  <img
                    className="avatar-img rounded-circle"
                    src="./assets/img/avatars/profiles/avatar-4.jpg"
                  />
                </div>
              </div>

              <div>
                <Clock />
              </div>
              <div>
                <button className="btn btn-primary d-block d-md-inline-block lift mr-2">
                  Chấm công vào
                </button>
                <button className="btn btn-danger d-block d-md-inline-block lift">
                  Chấm công ra
                </button>
              </div>
            </HeaderBodyWrapper>
            <div className="row align-items-center">
              <div className="col">
                <ul className="nav nav-tabs nav-over-flow header-tabs ml-4 mt-4">
                  <li className="nav-item">
                    <Link to="/">Lịch sử chấm công</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">Khác</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Checkin.propTypes = {};

export const HeaderBodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export default Checkin;
