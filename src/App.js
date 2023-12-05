import React from "react";
import "./App.css";
import Header from "./component/common/heading/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/about/About";
import CourseHome from "./component/allcourses/CourseHome";
import Team from "./component/team/Team";
import Price from "./component/pricing/Price";
import Blog from "./component/blog/Blog";
import Contact from "./component/contact/Contact";
import Footer from "./component/common/footer/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/about" exact component = {About} />
          <Route path="/courses" exact component = {CourseHome} />
          <Route path="/team" exact component = {Team} />
          <Route path="/pricing" exact component = {Price} />
          <Route path="/journal" exact component = {Blog} />
          <Route path="/contact" exact component = {Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
