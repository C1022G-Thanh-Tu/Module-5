import { Component } from "react";

class Header extends Component {
  render() {
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
              <a href="facilities.html">Dịch vụ</a>
            </li>
            <li>
              <a href="">Đội ngũ</a>
            </li>
            <li>
              <a href="customers.html">Khách hàng</a>
            </li>
            <li>
              <a href="contract.html">Hợp đồng</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Header;