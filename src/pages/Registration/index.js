import React from "react";
import _Page from "../_Page";
import { Card, Icon, Avatar } from "antd";
import "./styles.css";
import Logo from "../../assets/img/logobo.png";

class Registration extends _Page {
  render() {
    return (
      <>
        <div className="body">
          <Card title="Cadastro" className="card" extra={<Icon type="rollback"/>}>
          <div className="header">
            <Avatar
              src={Logo}
              shape="square"
              style={{ width: "30%", height: "30%" }}
            />
            <p>
                Desculpa, no momento não estamos realizando mais cadastros. Em breve voltaremos com atualizações.
            </p>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

export default Registration;




