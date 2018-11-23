import React, { Component } from 'react'
import LeftPanelContainer from 'app/container/LeftPanelContainer/LeftPanelContainer'
import RightPanelContainer from 'app/container/RightPanelContainer/RightPanelContainer'

class AppContainer extends Component {
  render() {
    return (
      <div className="app">
        <div className="columns">
          <div className="column is-4 has-background-grey fullHeight">
            <LeftPanelContainer/>
          </div>
          <div className="column is-8 has-background-light fullHeight">
            <RightPanelContainer/>
          </div>
        </div>
      </div>
    )
  }
}

export default AppContainer
