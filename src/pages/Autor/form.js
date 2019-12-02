import React from "react";
import {
  Input,
  notification,
  Form,
  Select,
  Card,
  Button,
  Icon
} from "antd";
import "./styles.css";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import _Page from "../_Page";
import AutorService from "../../services/AutorService";

const { Option } = Select;

class AutorForm extends _Page {
  static propTypes = {
    form: PropTypes.any.isRequired
  };

  service = AutorService;
  state = {
    model: {}
  };

  componentWillMount() {
    this.getModel();
  }

  handleSubmit = e => {
    e.preventDefault();
    AutorService.save(this.state.model, "id_autor").then(response => {
      this.update({ model: response.data });
      notification.open({
        message: "Sucesso!",
        description: "Suas alterações foram salvas com sucesso."
      });
      this.props.history.push("/autor")
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <>
        <Header title="Editar Autor" />
        <div className="bodycreate">
          <Card
            title="Cadastre o autor. Lembre-se de preencher todos os dados pedidos."
            className="cardcreate"
          >
            <div className="headercreate">
              {/*onSubmit={aqui} funcao para submissao do bd */}
              <Form onSubmit={this.handleSubmit} layout="inline">
                <Form.Item>
                  {getFieldDecorator("autor_name", {
                    rules: [
                      { required: true, message: "Nome do Autor" },
                      { max: 30, message: "maximo de 30 caracteres" }
                    ]
                  })}
                  <Input
                    prefix={<Icon type="read" />}
                    placeholder="Nome do autor"
                    name="autor_name"
                    value={this.state.model.autor_name}
                    onChange={e => this._handleInputChange(e, this.state.model)}
                  />
                  {getFieldDecorator("date_birth", {
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
                    name="date_birth"
                    value={this.state.model.date_birth}
                    onChange={e => this._handleInputChange(e, this.state.model)}
                  />
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("sex_genre", {
                    rules: [
                      { required: true, message: "Obrigatorio selecionar" }
                    ]
                  })}
                  <Select
                    value={this.state.model.sex_genre}
                    onChange={value =>
                      this._handleInputChange(
                        { target: { name: "sex_genre", value } },
                        this.state.model
                      )
                    }
                  >
                    <Option value="Female">Feminino</Option>
                    <Option value="Male">Masculino</Option>
                    <Option value="Other">Outro</Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Salvar
                  </Button>
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
                    prefix={<Icon type="read" />}
                    placeholder="Nacionalidade"
                    name="nationality"
                    value={this.state.model.nationality}
                    onChange={e => this._handleInputChange(e, this.state.model)}
                  />
                </Form.Item>
              </Form>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

export default Form.create({ name: "AutorForm" })(AutorForm);
