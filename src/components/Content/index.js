import React from 'react';
import './styles.css';



export default class Content extends React.Component{
    render(){
        return(
            <div className="bodycontent">
                {this.props.children}
            </div>
        );
    }
}
