import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";
import "./App.min.css";

const HomeView = lazy(() => import("./views/Home"));
const Catalogue = lazy(() => import("./views/Catalogue"));
const ProductType = lazy(() => import("./views/ProductType"));
const Contact = lazy(() => import("./views/Contact"));
const News = lazy(() => import("./views/News"));
const Deliver = lazy(() => import("./views/Deliver"));
const Insurance = lazy(() => import("./views/Insurance"));
const NewItem = lazy(() => import("./views/NewItem"));
const Detail = lazy(() => import("./views/Detail"));
const Charging = lazy(() => import("./views/Charging"));
const NotFoundView = lazy(() => import("./views/pages/404"));
const InternalServerErrorView = lazy(() => import("./views/pages/500"));

function App() {
  return (
    <BrowserRouter>
      <React.Fragment className="bg-light">
        <Header />
        <TopMenu />
        <Suspense
          fallback={
            <div className="text-white text-center mt-3">Loading...</div>
          }
        >
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/catalogue" component={Catalogue} />
            <Route exact path="/product-type" component={ProductType} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/news" component={News} />
            <Route exact path="/deliver" component={Deliver} />
            <Route exact path="/insurance" component={Insurance} />
            <Route exact path="/new-item" component={NewItem} />
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/charging" component={Charging} />
            <Route exact path="/500" component={InternalServerErrorView} />
            <Route path={'*'} component={NotFoundView} />
          </Switch>
        </Suspense>
        <Footer />
        <ScrollToTop smooth color="red" width='30px' height="30px" />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
