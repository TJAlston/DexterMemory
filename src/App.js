import React from 'react'
import './style.sass'
import Card from './Card'
const SHOW_TIME = 1500

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      cards: [
        'Jake',
        'Princess Bubblegum',
        'Finn',
        'BMO',
        'Ice King',
        'Jake',
        'Princess Bubblegum',
        'Finn',
        'BMO',
        'Ice King'
      ],
      matched: [],
      turned: [],
      win: false
    }
  }
//make this a function so the undefined(cards) will be correct in function
  flipCard = (index) => {
    const { turned, cards } = this.state
    if (turned.length < 2) {
      this.setState({
        turned: turned.concat(index)
      }, () => {
        if (this.state.turned.length === 2) {
          if (cards[this.state.turned[0]] === cards[this.state.turned[1]]) {
            this.setState({
              matched: this.state.matched.concat(...this.state.turned),
              turned: []
            }, () => {
              if (this.state.matched.length === cards.length) {
                setTimeout(() => {
                  this.setState({ win: true })
                }, SHOW_TIME/2)
              }
            })
          } else {
          setTimeout(() => {
            this.setState({ turned: [] })
          }, SHOW_TIME)
        }
       }
      })
    }
  }
// setState has two arguments.  The argument to change to the argument and the second would be to set the actual function of it.
  render () {
    if (!this.state.win) {
      // let cardData = this.state.cards
      const cards = this.state.cards.map((card, index)=> {
        const up = (this.state.turned + this.state.matched).includes(index)
        //these are the props of flipCard
        return <Card flipCard={this.flipCard} value={card} up={up} index={index} key={index}
         />
      })
      return <div>
        <h1>Class doing memory____TOGETHHHHHHHER!!!!</h1>
        <main>
          {cards}
        </main>
      </div>
    } else {
      return <div>
        <h1> YOU WIN!!! </h1>
        </div>
    }
  }
}

export default App
