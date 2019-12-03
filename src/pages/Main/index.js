import React from "react";
import _Page from "../_Page";
import "./styles.css";
import Header from "../../components/Header";
import { Card, Tooltip, Avatar } from "antd";
import Icongenre from "../../assets/img/genreicon.png";
import Iconautor from "../../assets/img/iconautor.png";
import Iconbook from "../../assets/img/iconbook.png";
import Iconpublisher from "../../assets/img/publishericon.png";

class Main extends _Page {
  render() {
    return (
      <>
        <Header title="Booklist" />
        <div className="bodymain">
          <Tooltip placement="bottom" title="Gerenciar livros">
            <Card className="cardmain">
              <Avatar src={Iconbook} size={100} shape="square" />
            </Card>
          </Tooltip>
          <Tooltip placement="bottom" title="Gerenciar editoras">
            <Card className="cardmain">
              <Avatar src={Iconpublisher} size={100} shape="square" />
            </Card>
          </Tooltip>
          <Tooltip placement="bottom" title="Gerenciar autores">
            <Card className="cardmain">
              <Avatar src={Iconautor} size={100} shape="square" />
            </Card>
          </Tooltip>
          <Tooltip placement="bottom" title="Gerenciar generos literarios">
            <Card className="cardmain">
              <Avatar src={Icongenre} size={100} shape="square" />
            </Card>
          </Tooltip>
        </div>
      </>
    );
  }
}
export default Main;
