import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Tweet from '../js/tweet'

// let variableName = "";
//   Higher scoped references needed throughout different functions
//     typically a reference that is redeclared, concat'd to, etc...
//     takes up less memory
// var variableName = "";
//   Reserve this as a private variable inside of scopes
// const variableName = "";
//  typically something that is very high level of scope
//    and can be seen throughout functions, but is changed very little
// static variableName = "NAME OF APP";
//   Not used typically but infers that it WILL NOT BE CHANGED

// The => arrow signifies a FUNCTION

describe("Tweeting", () => {
  let tweetComponent = {}

  beforeEach(()=>{
    // This is NOT a reference to the element in the page...
    //   it IS a reference to the component code
    tweetComponent = TestUtils.renderIntoDocument(<Tweet />)
  })

  it("Should have a tweet area", () => {
    // This is an example of how to find a REFERENCE to the DOM Element
    const tweetElement = TestUtils.findRenderedDOMComponentWithClass(
      tweetComponent,
      "tweet"
    )

    expect(tweetElement).toBeDefined()
  })

  it("Should have a timeline", ()=>{
    // We need to reference the timeline Element by class
    const timelineElement = TestUtils.findRenderedDOMComponentWithClass(
      tweetComponent,
      "timeline"
    )
    // Expect that it should have a timeline
    expect(timelineElement).toBeDefined()
  })

  it("A tweet shows up in timeline when submitted with text", ()=>{
    // We need to find a reference to the timeline
    const timelineElement = TestUtils.findRenderedDOMComponentWithClass(
      tweetComponent,
      "timeline"
    )
    // That we have text in the text input
    const submitElement = tweetComponent.refs.tweetSubmit
    // text to submit
    const testString = "Expo low odor dry erase marker is made of dreams?"
    tweetComponent.setState({
      tweets: [
        { tweet: testString }
      ]
    })
    // Find reference to new list item
    const newTweetElement = TestUtils.findRenderedDOMComponentWithClass(
      tweetComponent,
      "timeline__tweet"
    )
    // We expect the tweet text from text input to be in a list item inside of timeline
    // @TODO: NEED TO UPDATE with using child component unmocked
    expect(newTweetElement.textContent).toBe(testString)
  })
})
