import { Layout } from "antd"
import React from "react"
import AppHeader from "./components/commom/Header"
import AppFooter from "./components/commom/Footer"
import AppHome from "./views/Home"
import "antd/dist/antd.min.css"
import "./App.css"

const { Header, Content, Footer } = Layout

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  )
}

export default App
