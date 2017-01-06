import React from 'react'

export default React.createClass({
  render() {
    return (
      <li className="timeline__tweet">
        { this.props.tweetText }
      </li>
    )
  }
})
