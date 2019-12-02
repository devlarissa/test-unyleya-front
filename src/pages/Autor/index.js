import React from "react";
import {Table, Button} from "antd";
import _Page from "../_Page";
import Content from "../../components/Content";
import Header from "../../components/Header";
import AutorService from "../../services/AutorService";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default class AutorList extends _Page {
  state = {
    autores: []
  };

  columns = [
    {
      title: "#",
      dataIndex: "id_autor",
      key: "id_autor"
    },
    {
      title: "Nome",
      dataIndex: "autor_name",
      key: "autor_name"
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: autor => (
        <>
          <NavLink className="ant-btn" to={"/autor/" + autor.id_autor}>
            <span>Editar</span>
          </NavLink>
          <Button>Remover</Button>
        </>
      )
    }
  ];

  componentDidMount() {
    super.componentDidMount();
    AutorService.getAll().then(response => {
      this.update({ autores: response.data });
    });
  }

  render() {
    return (
      <>
        <Header title="Autores" />
        <Content>
          <NavLink className="ant-btn ant-btn-primary" to={"/autor/0"}>
            <span>Adicionar</span>
          </NavLink>
          <Table dataSource={this.state.autores} columns={this.columns} />
        </Content>
      </>
    );
  }
}
