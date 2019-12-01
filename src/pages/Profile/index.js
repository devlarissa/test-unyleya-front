import React from 'react';
import _Page from '../_Page';

import './styles.css';


class Profile extends _Page {

  state = {
    loading: true,
    loadingSubmit: false,
    nome: '',
    sobrenome: '',
  };

  componentDidMount() {
    super.componentDidMount();
    setTimeout(this.loaded, 750);
  }

  _handleFormSubmit = (e) => {
    e.preventDefault();

    const {nome, sobrenome} = this.state;

    this.update({loadingSubmit: true});

    setTimeout(() => {
      alert(`Nome: ${nome}\nSobrenome: ${sobrenome}`);
      this.update({loadingSubmit: false});
    }, 2000);
  };

  render() {
    return (
      <>
        {this.state.loading
          ? this.renderLoading()
          : this.renderForm()
        }
      </>
    );
  }

  renderLoading() {
    return (
      <div className={'text-center'}>
        Carregando...
      </div>
    );
  }

  renderForm() {
    const {state} = this;

    return (
      <div id={'profile-page'}>
        <h1>Profile Page</h1>
        <form onSubmit={this._handleFormSubmit}>
          <div className={'form-group'}>
            <label htmlFor={'nome'}>Nome</label>
            <input
              id={'nome'}
              type={'text'}
              name={'nome'}
              autoFocus
              value={state.nome}
              onChange={this._handleInputChange}
            />
          </div>
          <div className={'form-group'}>
            <label htmlFor={'sobrenome'}>Sobrenome</label>
            <input
              id={'sobrenome'}
              type={'text'}
              name={'sobrenome'}
              value={state.sobrenome}
              onChange={this._handleInputChange}
            />
          </div>
          <div className={'text-right'}>
            <button type={'submit'} disabled={state.loadingSubmit}>
              {state.loadingSubmit ? 'Salvando...' : 'Salvar'}
            </button>
          </div>
        </form>
      </div>
    );
  }

}

export default Profile;
