import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Main from '../js/main'

jest.unmock('../js/main')

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

describe("Twitter", () => {
  it("Should have a tweet area", () => {
    // This is NOT a reference to the element in the page...
    //   it IS a reference to the component code
    const mainComponent = TestUtils.renderIntoDocument(<Main />)
    // This is an example of how to find a REFERENCE to the DOM Element
    const mainElement = ReactDOM.findDOMNode(mainComponent)
    expect(tweetAreaElement).toBeDefined()
  })
});
