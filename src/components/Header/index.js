import React from "react";
import "./style.css";
import { PageHeader } from "antd";

class Header extends React.Component {
  render() {
    return <PageHeader className="bodyheader" ghost={false} {...this.props} />;
  }
}
export default Header;
