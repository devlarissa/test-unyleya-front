import React from "react";
import _Page from "../_Page";
import { Button, Card, Input, Icon, Avatar } from "antd";
import "./styles.css";
import Logo from "../../assets/img/logobo.png";


class Login extends _Page {
  render() {
    return (
      <>
        <div className="body">

          <Card className="card">
          <div className="header">
          <Avatar src={Logo} shape="square" style={{width:"30%", height:"30%"}}/>
          <p>Olá pessoinha! Bem-vindo ao Booklist, estamos em construição, logar indisponivel, basta clicar em login ou cadastrar para entrar.</p>
          </div>
            <Input className="input" placeholder="E-mail" prefix={<Icon type="user"/>} />
            <Input className="input" placeholder="senha" prefix={<Icon type="lock" />} />
            <div className="divbutton">
              <Button href="/home" className="button" icon="like"> LOGAR </Button>
              <Button href="/home" className="button"> CADASTRAR </Button>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

export default Login;
