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
            <Card extra={<a href="/book">More</a>} className="cardmain">
              <Avatar src={Iconbook} size={100} shape="square" />
            </Card>
          </Tooltip>
          <Tooltip placement="bottom" title="Gerenciar editoras">
            <Card extra={<a href="/publisher">More</a>} className="cardmain">
              <Avatar src={Iconpublisher} size={100} shape="square" />
            </Card>
          </Tooltip>
          <Tooltip placement="bottom" title="Gerenciar autores">
            <Card extra={<a href="/autor">More</a>} className="cardmain">
              <Avatar src={Iconautor} size={100} shape="square" />
            </Card>
          </Tooltip>
          <Tooltip placement="bottom" title="Gerenciar generos literarios">
            <Card extra={<a href="/genre">More</a>}className="cardmain">
              <Avatar src={Icongenre} size={100} shape="square" />
            </Card>
          </Tooltip>
        </div>
      </>
    );
  }
}
export default Main;
