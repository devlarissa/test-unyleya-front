import React from "react";
import { Input, notification, Form, Card, Button, Icon } from "antd";
import "./styles.css";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import _Page from "../_Page";
import PublisherService from "../../services/PublisherService";

class PublisherForm extends _Page {
  static propTypes = {
    form: PropTypes.any.isRequired
  };

  service = PublisherService;
  state = {
    model: {}
  };

  componentWillMount() {
    this.getModel();
  }

  handleSubmit = e => {
    e.preventDefault();
    PublisherService.save(this.state.model, "id_publisher").then(response => {
      this.update({ model: response.data });
      notification.open({
        message: "Sucesso!",
        description: "Suas alterações foram salvas com sucesso."
      });
      this.props.history.push("/publisher");
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <>
        <Header title="Editora" />
        <div className="bodycreate">
          <Card
            title="Cadastre a Editora. Lembre-se de preencher todos os dados pedidos."
            className="cardcreate"
          >
            <div className="headercreate">
              {/*onSubmit={aqui} funcao para submissao do bd */}
              <Form onSubmit={this.handleSubmit} layout="inline">
                <Form.Item>
                  {getFieldDecorator("publisher_name", {
                    rules: [
                      { required: true, message: "Nome da Editora" },
                      { max: 30, message: "maximo de 30 caracteres" }
                    ]
                  })}
                  <Input
                    prefix={<Icon type="highlight" />}
                    placeholder="Nome da Editora"
                    name="publisher_name"
                    value={this.state.model.publisher_name}
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

export default Form.create({ name: "PublisherForm" })(PublisherForm);
