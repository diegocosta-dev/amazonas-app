import {BrowserRouter, Route} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="row ">
              <div>
                  <a className="brand" href="/">amazonas</a>
              </div>
              <div>
                  <a href="/cart">Cart</a>
                  <a href="/signin">Sign In</a>
              </div>
          </header>
          <main>
            <Route path="/product/:id" component={ProductScreen}/>
            <Route path="/" exact component={HomeScreen}/>        
          </main>
          <footer className="row center">
              All right reserved
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
