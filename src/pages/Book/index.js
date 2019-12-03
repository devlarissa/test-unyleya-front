import React from "react";
import { Table, Button } from "antd";
import _Page from "../_Page";
import Content from "../../components/Content";
import Header from "../../components/Header";
import BookService from "../../services/BookService";
import { NavLink } from "react-router-dom";

export default class BookList extends _Page {
  state = {
    books: [],
    autor: {}
  };

  columns = [
    {
      title: "#",
      dataIndex: "id_book",
      key: "id_book"
    },
    {
      title: "Nome",
      dataIndex: "book_title",
      key: "book_title"
    },
    {
      title: "Ano de lançamento",
      dataIndex: "release_year",
      key: "release_year"
    },
    {
      title: "Autor",
      dataIndex: "id_autor",
      key: "id_autor"
    },
    {
      title: "Editora",
      dataIndex: "id_publisher",
      key: "id_publisher"
    },
    {
      title: "Genero",
      dataIndex: "id_genre",
      key: "id_genre"
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: book => (
        <>
          <NavLink
            className="ant-btn"
            style={{ margin: "1%" }}
            to={"/book/" + book.id_book}
          >
            <span>Editar</span>
          </NavLink>

          <Button
            onClick={e => {
              e.preventDefault();
              if (window.confirm("Deseja remover o registro?")) {
                BookService.delete(book.id_book).then(
                  BookService.getAll().then(response => {
      this.update({ books: response.data })
    })
                )
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
    BookService.getAll().then(response => {
      this.update({ books: response.data });
    });
  }

  render() {
    return (
      <>
        <Header title="Livros" />
        <Content>
          <NavLink
            className="ant-btn ant-btn-primary"
            style={{ margin: "1%" }}
            to={"/book/0"}
          >
            <span>Adicionar</span>
          </NavLink>
          <Table dataSource={this.state.books} columns={this.columns} />
        </Content>
      </>
    );
  }
}
