import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div id="header" className="fixed-top">
        <ul id="nav" style={{display: 'inline-block'}}>
          <li>
            <NavLink to="/">
              <img src="img/logo@2x.png" alt="" height="40px" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/facility">Dịch vụ</NavLink>
          </li>
          <li>
            <a href="">Đội ngũ</a>
          </li>
          <li>
            <NavLink to="/customer">Khách hàng</NavLink>
          </li>
          <li>
            <NavLink to="/contract">Hợp đồng</NavLink>
          </li>
        </ul>
        {/* <div className="search-btn col-2" style={{float: 'right', marginTop: '10px'}}>
          <div className="input-group">
            <input
              class="form-control border-end-0 border"
              type="search"
              placeholder="Tìm kiếm"
              name="search"
              value=""
              id="search"
            />
            <span className="input-group-append">
              <button
                class="btn bg-white border-start-0 border-bottom-0 border ms-n5"
                type="button"
              >
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Header;
