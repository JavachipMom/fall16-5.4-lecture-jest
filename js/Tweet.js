import React from 'react'
import TweetDetail from './TweetDetail'

export default React.createClass({
  getInitialState(){
    return {
      tweets: [
        {
          text: "Drake is the GOAT"
        }
      ]
    }
  },
  onClickSubmit(e) {
    // Stopping default browser refresh
    e.preventDefault();
    // Find tweet text input and assign to variableName
    let tweetText = this.refs.tweetText.value
    // Get current state
    let currentTweets = this.state.tweets
    currentTweets.push({ text: tweetText })
    // Update state with new tweet object
    this.setState({
      tweets: currentTweets
    })
  },
  render() {
    return (
      <section>
        <form method="POST"
              action="#tweet">
          <input className="tweet"
                 type="text"
                 ref="tweetText"/>
          <input ref="tweetSubmit" type="submit" onClick= { this.onClickSubmit }/>
        </form>
        <ol className="timeline" ref="timelineHTML">
          {
            this.state.tweets.map((tweet, i)=>{
              return <TweetDetail key={i} tweetText={tweet.text}/>
            })
          }
        </ol>
      </section>
    )
  }
})
