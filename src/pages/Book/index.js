import React from "react";
import {Table, Button} from "antd";
import _Page from "../_Page";
import Content from "../../components/Content";
import Header from "../../components/Header";
import BookService from "../../services/BookService";
import { NavLink } from "react-router-dom";

export default class BookList extends _Page {
  state = {
    books: []
  };

  columns = [
    {
      title: "#",
      dataIndex: "id_book",
      key: "id_book"
    },
    {
      title: "Nome",
      dataIndex: "books_title",
      key: "books_title"
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: book => (
        <>
          <NavLink className="ant-btn" style={{margin:"1%"}}to={"/book/" + book.id_book}>
            <span>Editar</span>
          </NavLink>
          <Button style={{margin:"1%"}}>Remover</Button>
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
          <NavLink className="ant-btn ant-btn-primary" style={{margin:"1%"}} to={"/book/0"}>
            <span>Adicionar</span>
          </NavLink>
          <Table dataSource={this.state.books} columns={this.columns} />
        </Content>
      </>
    );
  }
}
