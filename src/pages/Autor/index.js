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
      title: "Ano de nascimento",
      dataIndex: "date_birth",
      key: "date_birth"
    },
    {
      title: "Genero",
      dataIndex: "sex_genre",
      key: "sex_genre"
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: autor => (
        <>
          <NavLink className="ant-btn" style={{margin:"1%"}} to={"/autor/" + autor.id_autor}>
            <span>Editar</span>
          </NavLink>
          <Button style={{margin:"1%"}}>Remover</Button>
        </>
      )
    }
  ];

  deleteautor(id){
    AutorService.delete(id).then( response =>{
      this.update({autores: response.data});
    });
  }
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
          <NavLink className="ant-btn ant-btn-primary" style={{margin:"1%"}} to={"/autor/0"}>
            <span>Adicionar</span>
          </NavLink>
          <Table dataSource={this.state.autores} columns={this.columns} />
        </Content>
      </>
    );
  }
}
