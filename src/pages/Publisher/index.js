import React from "react";
import { Table, Button } from "antd";
import _Page from "../_Page";
import Content from "../../components/Content";
import Header from "../../components/Header";
import PublisherService from "../../services/PublisherService";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default class PublisherList extends _Page {
  state = {
    publishers: []
  };

  columns = [
    {
      title: "#",
      dataIndex: "id_publisher",
      key: "id_publisher"
    },
    {
      title: "Editora",
      dataIndex: "publisher_name",
      key: "publisher_name"
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: publisher => (
        <>
          <NavLink
            className="ant-btn" style={{margin:"2%"}}
            to={"/publisher/" + publisher.id_publisher}
          >
            <span>Editar</span>
          </NavLink>
          <Button style={{margin:"1%"}}>Remover</Button>
        </>
      )
    }
  ];

  componentDidMount() {
    super.componentDidMount();
    PublisherService.getAll().then(response => {
      this.update({ publishers: response.data });
    });
  }

  render() {
    return (
      <>
        <Header title="Editoras" />
        <Content>
          <NavLink className="ant-btn ant-btn-primary" style={{margin:"1%"}} to={"/publisher/0"}>
            <span>Adicionar</span>
          </NavLink>
          <Table dataSource={this.state.publishers} columns={this.columns} />
        </Content>
      </>
    );
  }
}
