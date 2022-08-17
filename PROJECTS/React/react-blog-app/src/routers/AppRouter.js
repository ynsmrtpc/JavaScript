import React from 'react'
import Header from '../components/Header'
import BlogListPage from '../components/BlogListPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'
import { Switch, Route, Router } from 'react-router-dom'
import AddBlogPage from '../components/AddBlogPage'
import EditBlogPage from '../components/EditBlogPage'
import LoginPage from '../components/LoginPage'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()
const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Header></Header>
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/blogs" component={BlogListPage} exact />
          <Route path="/create" component={AddBlogPage} />
          <Route path="/edit/:id" component={EditBlogPage} />
          <Route path="/blogs/:id" component={BlogDetailsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
