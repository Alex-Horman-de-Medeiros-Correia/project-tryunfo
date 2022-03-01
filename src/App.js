import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      newCard: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;

    const min = 0;
    const maxUnique = 90;
    const maxAll = 210;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      const { cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.state;

      this.setState({
        isSaveButtonDisabled: true,
      });

      const numOne = Number(cardAttr1);
      const numTwo = Number(cardAttr2);
      const numThree = Number(cardAttr3);
      const soma = numOne + numTwo + numThree;

      if (cardName && cardDescription && cardImage
        && cardRare && soma <= maxAll
        && numOne <= maxUnique && numOne >= min
        && numTwo <= maxUnique && numTwo >= min
        && numThree <= maxUnique && numThree >= min) {
        this.setState({
          isSaveButtonDisabled: false,

          // fiz o requisito 5 ao ver uma solução parcial em um grupo de estudos.
        });
      }
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();

    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo: cardTrunfo,
    };

    this.setState((estadoAnterior) => ({
      newCard: [...estadoAnterior.newCard, card],

      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }), () => {
      const { newCard } = this.state;
      this.setState({
        hasTrunfo: newCard.some((element) => element.hasTrunfo),
      });
    });
  }

  deleteCard(element) {
    const { newCard, hasTrunfo } = this.state;

    const igualDelete = newCard.filter((deleteItem) => element.cardName
    !== deleteItem.cardName);

    if (hasTrunfo === true) {
      this.setState({ hasTrunfo: false });
    }

    this.setState({
      newCard: igualDelete,
    });
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      newCard,
      isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        <div>
          { newCard.map((element, index) => (
            <div key={ index + element.cardName }>
              <Card
                cardName={ element.cardName }
                cardDescription={ element.cardDescription }
                cardAttr1={ element.cardAttr1 }
                cardAttr2={ element.cardAttr2 }
                cardAttr3={ element.cardAttr3 }
                cardImage={ element.cardImage }
                cardRare={ element.cardRare }
                cardTrunfo={ element.cardTrunfo }
              />

              <button
                type="button"
                data-testid="delete-button"
                onClick={ () => this.deleteCard(element) }
              >
                Excluir

              </button>
            </div>
          )) }
        </div>
      </div>
    );
  }
}

export default App;
