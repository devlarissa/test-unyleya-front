import React from "react";
import "./style.css";
import { PageHeader } from "antd";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return <PageHeader className="bodyheader" ghost={false} {...this.props}>
      <NavLink
            className="ant-btn" style={{border:"0"}}
            to={"/home"}
          >
            <span>Home</span>
          </NavLink>
    </PageHeader>;
  }
}
export default Header;
