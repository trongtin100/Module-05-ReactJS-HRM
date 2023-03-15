import React from "react";
import Navbar from "../common/Navbar";

function Home() {
  return (
    <>
      <div className="main-content">
        {" "}
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-xl-4">
              <div className="card-adjust-xl">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-header-title">Hoạt động gần đầy</h4>
                    <a className="small" href="#!">
                      Xem tất cả
                    </a>
                  </div>
                  <div className="card-body">
                    <div className="list-group list-group-flush list-group-activity my-n3">
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col-auto">
                            <div className="avatar avatar-sm">
                              <img
                                src="./assets/img/avatars/profiles/avatar-1.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="col ml-n2">
                            <div className="small">
                              <strong>Tèo Nguyễn</strong> đã chia sẻ bài đăng
                              của bạn với Tý Lê, Dần Trần, và 3 người khác.
                            </div>
                            <small className="text-muted">2 phút trước</small>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col-auto">
                            <div className="avatar avatar-sm">
                              <img
                                src="./assets/img/avatars/profiles/avatar-2.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="col ml-n2">
                            <div className="small">
                              <strong>Tý Lê</strong> tương tác vào bài viết của
                              bạn với biểu cảm 😍
                            </div>

                            <small className="text-muted">2 phút trước</small>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col-auto">
                            <div className="avatar avatar-sm">
                              <img
                                src="./assets/img/avatars/profiles/avatar-3.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="col ml-n2">
                            <div className="small">
                              <strong>Dần Trần</strong> đã bình luận
                              <blockquote className="mb-0">
                                “Tôi không nghĩ rằng điều này thực sự có ý nghĩa
                                nếu không có sự chấp thuận của Mẹo Nguyễn vì anh
                                ấy là người...”
                              </blockquote>
                            </div>

                            <small className="text-muted">2 phút trước</small>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col-auto">
                            <div className="avatar avatar-sm">
                              <img
                                src="./assets/img/avatars/profiles/avatar-4.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="col ml-n2">
                            <div className="small">
                              <strong>Thìn Lê</strong> đăng ký theo dõi bạn.
                            </div>

                            <small className="text-muted">2 phút trước</small>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col-auto">
                            <div className="avatar avatar-sm">
                              <img
                                src="./assets/img/avatars/profiles/avatar-5.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="col ml-n2">
                            <div className="small">
                              <strong>Ngọ Văn</strong> đã chia sẻ bài đăng của
                              bạn với Tý Lê, Dần Trần, và 3 người khác.
                            </div>

                            <small className="text-muted">2 phút trước</small>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col-auto">
                            <div className="avatar avatar-sm">
                              <img
                                src="./assets/img/avatars/profiles/avatar-6.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="col ml-n2">
                            <div className="small">
                              <strong>Mùi Đinh</strong> tương tác vào bài viết
                              của bạn với biểu cảm 😍
                            </div>

                            <small className="text-muted">2 phút trước</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header-title">Sản phẩm bán chạy nhất</h4>
                  <a href="#!" className="btn btn-sm btn-white">
                    Xuất tập tin
                  </a>
                </div>
                <div
                  className="table-responsive mb-0"
                  data-list='{"valueNames": ["products-product", "products-stock", "products-price", "products-sales"]}'
                  id="productsList"
                >
                  <table className="table table-sm table-nowrap table-hover card-table">
                    <thead>
                      <tr>
                        <th>
                          <a
                            href="/"
                            className="text-muted list-sort"
                            data-sort="products-product"
                          >
                            Sản phẩm
                          </a>
                        </th>
                        <th>
                          <a
                            href="/"
                            className="text-muted list-sort"
                            data-sort="products-stock"
                          >
                            Trạng thái
                          </a>
                        </th>
                        <th>
                          <a
                            href="/"
                            className="text-muted list-sort"
                            data-sort="products-price"
                          >
                            Giá cả
                          </a>
                        </th>
                        <th colSpan="2">
                          <a
                            href="/"
                            className="text-muted list-sort"
                            data-sort="products-sales"
                          >
                            Tổng tiền
                          </a>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="list">
                      <tr>
                        <td className="products-product">
                          <div className="d-flex align-items-center">
                            <div className="avatar">
                              <img
                                className="avatar-img rounded mr-3"
                                src="assets/img/avatars/products/product-1.jpg"
                                alt="..."
                              />
                            </div>

                            <div className="ml-3">
                              <h4 className="font-weight-normal mb-1">
                                Sketchpad
                              </h4>
                              <small className="text-muted">3" x 5" Size</small>
                            </div>
                          </div>
                        </td>
                        <td className="products-stock">
                          <span className="badge badge-soft-success">
                            Available
                          </span>
                        </td>
                        <td className="products-price">$14.99</td>
                        <td className="products-sales">$3,145.23</td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              href="/"
                              className="dropdown-ellipses dropdown-toggle"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#!" className="dropdown-item">
                                Action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Another action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="products-product">
                          <div className="d-flex align-items-center">
                            <div className="avatar">
                              <img
                                className="avatar-img rounded mr-3"
                                src="assets/img/avatars/products/product-2.jpg"
                                alt="..."
                              />
                            </div>

                            <div className="ml-3">
                              <h4 className="font-weight-normal mb-1">
                                Turtleshell Shades
                              </h4>
                              <small className="text-muted">
                                UV + Blue Light
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="products-stock">
                          <span className="badge badge-soft-warning">
                            Unavailable
                          </span>
                        </td>
                        <td className="products-price">$39.99</td>
                        <td className="products-sales">$2,611.82</td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              href="/"
                              className="dropdown-ellipses dropdown-toggle"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#!" className="dropdown-item">
                                Action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Another action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="products-product">
                          <div className="d-flex align-items-center">
                            <div className="avatar">
                              <img
                                className="avatar-img rounded mr-3"
                                src="assets/img/avatars/products/product-3.jpg"
                                alt="..."
                              />
                            </div>

                            <div className="ml-3">
                              <h4 className="font-weight-normal mb-1">
                                Nike "Go Bag"
                              </h4>
                              <small className="text-muted">
                                Leather + Gortex
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="products-stock">
                          <span className="badge badge-soft-success">
                            Available
                          </span>
                        </td>
                        <td className="products-price">$149.99</td>
                        <td className="products-sales">$2,372.19</td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              href="/"
                              className="dropdown-ellipses dropdown-toggle"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#!" className="dropdown-item">
                                Action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Another action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="products-product">
                          <div className="d-flex align-items-center">
                            <div className="avatar">
                              <img
                                className="avatar-img rounded mr-3"
                                src="assets/img/avatars/products/product-4.jpg"
                                alt="..."
                              />
                            </div>

                            <div className="ml-3">
                              <h4 className="font-weight-normal mb-1">
                                Swell Bottle
                              </h4>
                              <small className="text-muted">
                                Bone Clay White
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="products-stock">
                          <span className="badge badge-soft-success">
                            Available
                          </span>
                        </td>
                        <td className="products-price">$24.99</td>
                        <td className="products-sales">$1,145.23</td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              href="/"
                              className="dropdown-ellipses dropdown-toggle"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#!" className="dropdown-item">
                                Action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Another action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
