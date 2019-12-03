import React from "react";
import { Table, Button } from "antd";
import _Page from "../_Page";
import Content from "../../components/Content";
import Header from "../../components/Header";
import GenreService from "../../services/GenreService";
import { NavLink } from "react-router-dom";
import "./styles.css";

export default class GenreList extends _Page {
  state = {
    genres: []
  };

  columns = [
    {
      title: "#",
      dataIndex: "id_genre",
      key: "id_genre"
    },
    {
      title: "Genero",
      dataIndex: "literary_genre",
      key: "literary_genre"
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: genre => (
        <>
          <NavLink
            className="ant-btn" style={{margin:"1%"}}
            to={"/genre/" + genre.id_publisher}
          >
            <span>Editar</span>
          </NavLink>

          <Button
            onClick={e => {
              e.preventDefault();
              if (window.confirm("Deseja remover o registro?")) {
                GenreService.delete(genre.id_genre).then(response => {
                  this.update({ genres: response.data });
                });
              }
            }}
          >
            Remover
          </Button>
        </>
      )
    }
  ];

  componentDidMount() {
    super.componentDidMount();
    GenreService.getAll().then(response => {
      this.update({ genres: response.data });
    });
  }

  render() {
    return (
      <>
        <Header title="Generos" />
        <Content>
          <NavLink className="ant-btn ant-btn-primary" style={{margin:"1%"}} to={"/genre/0"}>
            <span>Adicionar</span>
          </NavLink>
          <Table dataSource={this.state.genres} columns={this.columns} />
        </Content>
      </>
    );
  }
}
