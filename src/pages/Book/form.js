import React from "react";
import {Input,Select,notification,Form,Card,Button,Icon} from "antd";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import _Page from "../_Page";
import BookService from "../../services/BookService";
import AutorService from "../../services/AutorService";
import GenreService from "../../services/GenreService";
import PublisherService from "../../services/PublisherService";

const { Option } = Select;
class BookForm extends _Page {
  static propTypes = {
    form: PropTypes.any.isRequired
  };

  service = BookService;
  state = {
    model: {},
    autores:[],
    generos:[],
    editoras:[]
  };

  componentWillMount() {
    this.getModel();
  }

  componentDidMount() {
    super.componentDidMount();
    AutorService.getAll().then(response => {
      this.update({ autores: response.data });
    });
    GenreService.getAll().then(response => {
      this.update({ generos: response.data });
    });
    PublisherService.getAll().then(response => {
      this.update({ editoras: response.data });
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
        <Header title="Livro" />
        <div className="bodycreate">
          <Card
            title="Cadastre o livro. Lembre-se de preencher todos os dados pedidos."
            className="cardcreate"
          >
            <div className="headercreate">
              {/*onSubmit={aqui} funcao para submissao do bd */}
              <Form onSubmit={this.handleSubmit} layout="inline">
                <Form.Item>
                  {getFieldDecorator("book_title", {
                    rules: [
                      { required: true, message: "Nome do livro" },
                      { max: 30, message: "maximo de 30 caracteres" }
                    ]
                  })}
                  <Input
                    prefix={<Icon type="read" />}
                    placeholder="Titulo do livro"
                    name="book_title"
                    value={this.state.model.book_title}
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
                 <Form.Item>
                  {getFieldDecorator("id_autor", {
                    rules: [
                      { required: true, message: "Obrigatorio selecionar" }
                    ]
                  })}

                  <Select
                    value={this.state.model.id_autor}
                    onChange={value =>
                      this._handleInputChange(
                        { target: { name: "id_autor", value } },
                        this.state.model
                      )
                    }
                  >
                    {this.state.autores.map(autor => {
                      return (
                        <Option value={autor.id_autor}>
                          {autor.autor_name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("id_genre", {
                    rules: [
                      { required: true, message: "Obrigatorio selecionar" }
                    ]
                  })}

                  <Select
                    value={this.state.model.id_genre}
                    onChange={value =>
                      this._handleInputChange(
                        { target: { name: "id_genre", value } },
                        this.state.model
                      )
                    }
                  >
                    {this.state.generos.map(genero => {
                      return (
                        <Option value={genero.id_genre}>
                          {genero.literary_genre}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("id_publisher", {
                    rules: [
                      { required: true, message: "Obrigatorio selecionar" }
                    ]
                  })}

                  <Select
                    value={this.state.model.id_publisher}
                    onChange={value =>
                      this._handleInputChange(
                        { target: { name: "id_publisher", value } },
                        this.state.model
                      )
                    }
                  >
                    {this.state.editoras.map(editora => {
                      return (
                        <Option value={editora.id_publisher}>
                          {editora.publisher_name}
                        </Option>
                      );
                    })}
                  </Select>
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
