import React from 'react';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <form>
        <label htmlFor="card">
          Insira aqui o nome da carta...
          <br />
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            id="card"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <br />
        <br />

        <label htmlFor="descricao">
          Insira aqui a descrição da carta...
          <br />
          <textarea
            data-testid="description-input"
            id="descricao"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <br />
        <br />

        <label htmlFor="atributoOne">
          Insira aqui o PRIMEIRO atributo da carta...
          <br />
          <input
            type="number"
            data-testid="attr1-input"
            id="atributoOne"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <br />
        <br />

        <label htmlFor="atributoTwo">
          Insira aqui o SEGUNDO atributo da carta...
          <br />
          <input
            type="number"
            data-testid="attr2-input"
            id="atributoTwo"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <br />
        <br />

        <label htmlFor="atributoThree">
          Insira aqui o TERCEIRO atributo da carta...
          <br />
          <input
            type="number"
            data-testid="attr3-input"
            id="atributoThree"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <br />
        <br />

        <label htmlFor="image">
          Insira aqui a imagem da carta...
          <br />
          <input
            type="text"
            data-testid="image-input"
            id="image"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <br />
        <br />

        <label htmlFor="raridade">
          Qual a raridade da carta?
          <br />
          <select
            data-testid="rare-input"
            id="raridade"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <br />
        <br />

        <label htmlFor="superTrunfo">
          Essa carta é o SUPER TRUNFO?
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="superTrunfo"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <br />
        <br />

        <div>
          <button
            type="submit"
            data-testid="save-button"
            id="salvando"
            name="isSaveButtonDisabled"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
        </div>

      </form>
    );
  }
}

export default Form;
