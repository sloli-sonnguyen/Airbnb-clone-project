import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

// user
const Homepage = React.lazy(() => import('./views/userpage/HomePage/HomePage'));
const ProductsPage = React.lazy(() => import('./views/userpage/ProductsPage/ProductsPage'));
const ProductDetailPage = React.lazy(() => import('./views/userpage/ProductDetailPage/ProductDetailPage'));

class App extends Component {

  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/admin/login" name="Login Page" render={props => <Login {...props} />} />
            <Route exact path="/admin/register" name="Register Page" render={props => <Register {...props} />} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
            <Route path="/admin/" name="Home" render={props => <TheLayout {...props} />} />
            <Route exact path="/" name="HomeUser" render={props => <Homepage {...props} />} />
            <Route exact path="/products" name="ProductsPage" render={props => <ProductsPage {...props} />} />
            <Route exact path="/products/:id" name="ProductDetailPage" render={props => <ProductDetailPage {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
