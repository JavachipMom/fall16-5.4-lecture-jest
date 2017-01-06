import React from 'react'

export default React.createClass({
  render() {
    return (
      <section>
        <form method="POST"
              action="#tweet">
          <input type="text"/>
          <input type="submit"/>
        </form>
      </section>
    )
  }
})
