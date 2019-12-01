import React from "react";
import "./style.css";
import {PageHeader, Menu, Dropdown, Avatar, Button, Tag, Typography, Row, Descriptions} from "antd";
import Logo from "../../assets/img/logobo.png"

function Header() {
  const { Paragraph } = Typography;
  return (
    <div >
     <PageHeader className="body"
      ghost={false}
      title="Booklist"
      subTitle="Seu melhor gerenciador de livros!"
      extra={[
        <Button key="3">Operation</Button>,
        <Button key="2">Operation</Button>,
        <Button key="1">Primary</Button>,
      ]}
    />
  </div>
  );
}
export default Header;
