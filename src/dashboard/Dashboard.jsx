import React, { Component } from 'react'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'

class Dashboard extends Component {
  render () {
    return (
      <div>
        <ContentHeader />
        <Content>
            Dashboard
        </Content>
      </div>
    )
  }
}

export default Dashboard
