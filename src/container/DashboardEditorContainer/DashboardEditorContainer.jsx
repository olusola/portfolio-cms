import React, { Component } from 'react'
import './dashboardEditorContainer.css'
import { menuItems } from 'app/helper/leftPanelMenu.js'

class DashboardEditorContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTab: 'page',
      shortId: 'new'
    }
  }

  selectedTab = (selectedTab) => {
    this.setState({ selectedTab })
  }

  tabContent = (selected) => {
    switch (selected) {
      case 'page':
        return (
          <MetaPageContainer/>
        )
      case 'category':
        return (
          <CategoryContainer/>
        )
      case 'newItem':
        return (
          <MenuListItemContainer/>
        )
      case 'share':
        return (
          <ShareContainer pageUrl={this.state.shortId}/>
        )
      default:
        return (
          <MenuListItemContainer/>
        )
    }
  }

  render() {
    return (
      <div className="sidePanel-wrapper">
        <div className="side-panel--slim">
          <ul>
          {
            menuItems.map((item, index) => {
              return (
                <div key={index}>
                  <li className={ this.state.selectedTab === item.name ? 'activeTab' : null } onClick={() => this.selectedTab(item.name)}><span size={item.size} name={item.icon}/></li>
                </div>
              )
            })
          }
          </ul>
        </div>
        <div className=".side-panel--shady">
          f
        </div>
      </div>
    )
  }
}

export default DashboardEditorContainer
