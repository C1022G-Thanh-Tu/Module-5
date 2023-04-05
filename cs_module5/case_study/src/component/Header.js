import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div id="header" className="fixed-top">
        <ul id="nav">
          <li>
            <a href="">
              <img src="img/logo@2x.png" alt="" height="40px" />
            </a>
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
            <a href="contract.html">Hợp đồng</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
