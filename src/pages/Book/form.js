import React from "react";
import {Input,notification,Form,Card,Button,Icon} from "antd";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import _Page from "../_Page";
import BookService from "../../services/BookService";
import AutorService from "../../services/AutorService";

class BookForm extends _Page {
  static propTypes = {
    form: PropTypes.any.isRequired
  };

  service = BookService;
  state = {
    model: {},
    autores: []
  };

  componentWillMount() {
    this.getModel();
  }
  componentDidMount() {
    super.componentDidMount();
    AutorService.getAll().then(response => {
      this.update({ autores: response.data });
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    BookService.save(this.state.model, "id_book").then(response => {
      this.update({ model: response.data });
      notification.open({
        message: "Sucesso!",
        description: "Suas alterações foram salvas com sucesso."
      });
      this.props.history.push("/book")
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <>
        <Header title="Editar Livro" />
        <div className="bodycreate">
          <Card
            title="Cadastre o Livro. Lembre-se de preencher todos os dados pedidos."
            className="cardcreate"
          >
            <div className="headercreate">
              {/*onSubmit={aqui} funcao para submissao do bd */}
              <Form onSubmit={this.handleSubmit} layout="inline">
                <Form.Item>
                  {getFieldDecorator("books_title", {
                    rules: [
                      { required: true, message: "Nome do livro" },
                      { max: 30, message: "maximo de 30 caracteres" }
                    ]
                  })}
                  <Input
                    prefix={<Icon type="read" />}
                    placeholder="Nome do Livro"
                    name="book_name"
                    value={this.state.model.books_title}
                    onChange={e => this._handleInputChange(e, this.state.model)}
                  />
                  {getFieldDecorator("release_year", {
                    rules: [
                      { required: true, message: "Insira o ano de lançamento" },
                      { type: "number", message: "Apenas formato numerico" },
                      { min: 4, message: "formato yyyy" },
                      { max: 4, message: "formato yyyy" }
                    ]
                  })}
                  <Input
                    prefix={<Icon type="calendar" />}
                    placeholder="Ano de lançamento"
                    name="release_year"
                    value={this.state.model.release_year}
                    onChange={e => this._handleInputChange(e, this.state.model)}
                  />
                </Form.Item>
                <Form.Item />
                <Form.Item>
                  {getFieldDecorator("nationality", {
                    rules: [
                      { required: true, message: "Insira a nacionalidade" },
                      { max: 30, message: "maximo de 30 caracteres" }
                    ]
                  })}
                  <Input
                    prefix={<Icon type="form" />}
                    placeholder="Nacionalidade"
                    name="nationality"
                    value={this.state.model.nationality}
                    onChange={e => this._handleInputChange(e, this.state.model)}
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Salvar
                  </Button>
                </Form.Item>

              </Form>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

export default Form.create({ name: "BookForm" })(BookForm);
