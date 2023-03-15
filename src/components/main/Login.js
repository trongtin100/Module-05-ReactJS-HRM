import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  selectError,
  selectLoading,
  setError,
  setLoading,
} from "../../features/userSlice";
import { retrieveData } from "../../services/airtable.service";
import { setLocalUser } from "../../services/local-storage.service";
import { tableConfig } from "../../utils/airtable";
import Loading from "../common/Loading";

function Login() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const accountTable = tableConfig("account");
  const [account, setAccount] = useState({ username: "", password: "" });

  const handleInput = (e) => {
    setAccount({ ...account, [e.target.name]: [e.target.value] });
  };
  const onSubmitSignIn = (e) => {
    dispatch(setLoading(true));
    e.preventDefault();
    retrieveData(
      {
        filterByFormula: `username="${account.username}"`,
      },
      "account",
      accountTable
    ).then((result) => {
      let resultFields = null;

      if (result.length > 0) resultFields = result && result[0].fields;
      const verify =
        result.length > 0 && resultFields.password === account.password[0];

      if (verify) {
        dispatch(setLoading(false));
        dispatch(
          login({
            user: resultFields,
          })
        );
        setLocalUser(resultFields);
        console.log("Đăng nhập thành công");
      } else {
        dispatch(setLoading(false));
        dispatch(setError(true));
        console.log("Đăng nhập thất bại");
      }
    });

    console.log("username + password: ", account);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 col-xl-4 my-5">
          <h1 className="display-4 text-center mb-5">ĐĂNG NHẬP</h1>

          <form>
            <div className="form-group">
              <label>Tên tài khoản</label>

              <input
                name="username"
                type="text"
                className="form-control"
                placeholder="Nhập vào tài khoản"
                value={account.username}
                onChange={handleInput}
              />
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col">
                  <label>Mật khẩu</label>
                </div>
                <div className="col-auto">
                  <a
                    href="password-reset.html"
                    className="form-text small text-muted"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
              </div>

              <div className="input-group input-group-merge">
                <input
                  name="password"
                  type="password"
                  className="form-control form-control-appended"
                  placeholder="Nhập vào mât khẩu"
                  value={account.password}
                  onChange={handleInput}
                />

                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fe fe-eye"></i>
                  </span>
                </div>
              </div>
            </div>
            {error && (
              <div className="alert alert-danger">
                Thông tin đăng nhập không chính xác, xin vui lòng nhập lại!
              </div>
            )}
            <button
              className="btn btn-lg btn-block btn-primary mb-3"
              onClick={onSubmitSignIn}
            >
              {loading ? <Loading variant="light" /> : "Đăng nhập"}
            </button>

            <div className="text-center">
              <small className="text-muted text-center">
                Chưa có tài khoản ? <a href="sign-up.html">Đăng ký</a>.
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
