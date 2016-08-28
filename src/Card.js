import React from 'react'

class Card extends React.Component {
  handleClick = () => {
    this.props.flipCard(this.props.index)
  }

  render () {
    const direction = this.props.up ? 'up' : 'down'
    switch (direction) {
      case 'up': return <img src={this.props.value} onClick={this.handleClick} className={`card ${direction}`} />
      break
      case 'down': return <img src='http://cdn.24.co.za/files/Cms/General/d/2659/0f68158f1e2d4426a2d0d638bb44a226.jpg' onClick={this.handleClick} className={`card ${direction}`} />
      break
      default:  return <img src='http://cdn.24.co.za/files/Cms/General/d/2659/0f68158f1e2d4426a2d0d638bb44a226.jpg' onClick={this.handleClick} className={`card ${direction}`} />
  }
}
}

export default Card
