import React from "react";
import { Input, notification, Form, Card, Button, Icon } from "antd";
import "./styles.css";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import _Page from "../_Page";
import GenreService from "../../services/GenreService";

class GenreForm extends _Page {
  static propTypes = {
    form: PropTypes.any.isRequired
  };

  service = GenreService;
  state = {
    model: {}
  };

  componentWillMount() {
    this.getModel();
  }

  handleSubmit = e => {
    e.preventDefault();
    GenreService.save(this.state.model, "id_genre").then(response => {
      this.update({ model: response.data });
      notification.open({
        message: "Sucesso!",
        description: "Suas alterações foram salvas com sucesso."
      });
      this.props.history.push("/genre");
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <>
        <Header title="Genero Literario" />
        <div className="bodycreate">
          <Card
            title="Cadastre um genero literario. Lembre-se de preencher todos os dados pedidos."
            className="cardcreate"
          >
            <div className="headercreate">
              {/*onSubmit={aqui} funcao para submissao do bd */}
              <Form onSubmit={this.handleSubmit} layout="inline">
                <Form.Item>
                  {getFieldDecorator("literary_genre", {
                    rules: [
                      { required: true, message: "Genero Literario" },
                      { max: 30, message: "maximo de 30 caracteres" }
                    ]
                  })}
                  <Input
                    prefix={<Icon type="highlight" />}
                    placeholder="Genero literario"
                    name="literary_genre"
                    value={this.state.model.literary_genre}
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

export default Form.create({ name: "GenreForm" })(GenreForm);
