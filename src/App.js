import { Component } from "react";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";

class App extends Component {

  render() {
    return <div>
      <h1>App Component</h1>
      <Navbar />
      <Home />
      <Footer />
    </div>
  }

}
export default App;