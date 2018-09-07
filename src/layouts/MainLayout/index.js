import * as React from 'react'
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd'

const { Content, Header, Footer } = Layout

const MenuItem = Menu.Item

class MainLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <MenuItem key="1">nav 1</MenuItem>
            <MenuItem key="2">nav 2</MenuItem>
            <MenuItem key="3">nav 3</MenuItem>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    locale: state.exchangeReducer.locale,
    localeOptions: state.exchangeReducer.options
  })
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout)
