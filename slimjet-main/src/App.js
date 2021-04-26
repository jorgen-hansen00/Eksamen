import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
      </Switch>
    </BrowserRouter>
    <div className="page-container">
      <div className="content-wrap">
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
        <h1>CONTENT FOR FOOTER</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
