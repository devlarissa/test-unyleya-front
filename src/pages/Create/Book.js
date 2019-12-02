import React, { Component } from 'react';
import {Input, Form, Card, Button, InputNumber, Icon} from 'antd';
import './styles.css';
import PropTypes, { number } from 'prop-types'
import Header from "../../components/Header"

class CreateBook extends Component {
    static propTypes = {
        form: PropTypes.any.isRequired
    }

    render(){
        const {form} = this.props;
        const { getFieldDecorator}= form;
        return(
            <>
        <div className="bodycreate">
         
         <Card title='Cadastre o seu livro. Lembre-se de preencher todos os dados pedidos.' className="cardcreate">
            <div className="headercreate">
            {/*onSubmit={aqui} funcao para submissao do bd */}
               <Form layout="inline">
                    <Form.Item>{getFieldDecorator('Titulo', {
                        rules:[{required:true, message:'Insira o titulo'},{max:30, message:'maximo de 30 caracteres'}]
                    })} 
                    <Input prefix={<Icon type ="read"/>} placeholder="Titulo do livro" />
                
                </Form.Item>
                <Form.Item>{getFieldDecorator('Titulo', {
                        rules:[{required:true, message:'Insira o ano de lançamento'},{type:number, message:"Apenas formato numerico"},{min:4, message:"formato yyyy"}, {max:4,message:"formato yyyy"}]
                    })} 
                    <Input prefix={<Icon type ="calendar"/>} placeholder="Ano de lançamento" />
                
                </Form.Item>

               </Form>
            </div>
         </Card>
       </div>
            </>
        );
        
    }
}

export default Form.create({ name: 'CreateBook' })(CreateBook)