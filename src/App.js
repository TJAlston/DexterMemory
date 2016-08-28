import React from 'react'
import './style.sass'
import Card from './Card'
// import Cards from './Cards.json'
const SHOW_TIME = 1500

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      cards: [
        'https://moviefull-hd.com/images/2015/12/Watch-Dexter-Season-3-Online.jpg',
        'https://upload.wikimedia.org/wikipedia/en/3/31/Dexter_season_1_DVD.png',
        'http://i.ebayimg.com/images/g/~90AAMXQzopRFwc0/s-l300.jpg',
        // 'http://store.sho.com/imgcache/product/resized/000/769/264/catl/dexter-the-most-shocking-episodes-dvd-296_1000.jpg?k=0668db8f&pid=769264&s=catl&sn=showtime',
        'http://assets.nydailynews.com/polopoly_fs/1.1383409.1372283321!/img/httpImage/image.jpg_gen/derivatives/article_750/dexter-season-8.jpg',
        'https://upload.wikimedia.org/wikipedia/en/6/6f/Dexter_season_2_DVD.png',
        'https://s-media-cache-ak0.pinimg.com/236x/c8/46/bb/c846bb6dadfec93f69f8b1b2d09f0b6d.jpg',
        'http://i.skyrock.net/8472/70238472/pics/2996039339_1_7_jUfhgSkZ.jpg',
        'https://moviefull-hd.com/images/2015/12/Watch-Dexter-Season-3-Online.jpg',
        'http://fontmeme.com/images/Dexter-TV-Series.jpg',
        'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Dexter_S4_DVD.jpg/220px-Dexter_S4_DVD.jpg',
        'http://67.media.tumblr.com/tumblr_maw1tct5jg1ry1uroo5_1280.jpg',
        // 'http://data.whicdn.com/images/6495545/tumblr_lcex9yqLhs1qzchgbo1_500_large.jpg',
        // 'http://data.whicdn.com/images/6495545/tumblr_lcex9yqLhs1qzchgbo1_500_large.jpg',
        'https://upload.wikimedia.org/wikipedia/en/0/0f/Dexter_Season_8_promotional_poster.jpeg',
        'https://upload.wikimedia.org/wikipedia/en/3/31/Dexter_season_1_DVD.png',
        'https://upload.wikimedia.org/wikipedia/en/6/6f/Dexter_season_2_DVD.png',
        'http://i.ebayimg.com/images/g/~90AAMXQzopRFwc0/s-l300.jpg',
        'http://i.skyrock.net/8472/70238472/pics/2996039339_1_7_jUfhgSkZ.jpg',
        'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Dexter_S4_DVD.jpg/220px-Dexter_S4_DVD.jpg',
        'https://s-media-cache-ak0.pinimg.com/236x/c8/46/bb/c846bb6dadfec93f69f8b1b2d09f0b6d.jpg',
        'http://assets.nydailynews.com/polopoly_fs/1.1383409.1372283321!/img/httpImage/image.jpg_gen/derivatives/article_750/dexter-season-8.jpg',
        'https://upload.wikimedia.org/wikipedia/en/7/7f/Dexter_S6_DVD_Cover.jpg',
        'http://67.media.tumblr.com/tumblr_maw1tct5jg1ry1uroo5_1280.jpg',
        'http://fontmeme.com/images/Dexter-TV-Series.jpg',
        'https://upload.wikimedia.org/wikipedia/en/7/7f/Dexter_S6_DVD_Cover.jpg',
        'https://upload.wikimedia.org/wikipedia/en/0/0f/Dexter_Season_8_promotional_poster.jpeg',
        // 'http://store.sho.com/imgcache/product/resized/000/769/264/catl/dexter-the-most-shocking-episodes-dvd-296_1000.jpg?k=0668db8f&pid=769264&s=catl&sn=showtime'
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
        let up = !this.state.turned.includes(index) ? this.state.matched.includes(index) : this.state.turned.includes(index)
        //these are the props of flipCard
        return <Card flipCard={this.flipCard} value={card} up={up} index={index} key={index}
         />
      })
      return <div>
        <h1>MEMORY</h1>
        <main>
          {cards}
        </main>
      </div>
    } else {
      return <div>
        <h2> YOU WIN!!! </h2>
        <div classname="WINBG"></div>
        </div>
    }
  }
}

export default App
