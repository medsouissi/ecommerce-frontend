//import ReactDOM from "react-dom";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return(
    <div className="App">
      <Home/>
      <Login/>
      <Product/>
      <ProductList/>
      <Register/>
      <Cart/>
    </div>
  )
}


export default App;
/*export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Home />} />
          <Route path="ProductList" element={<ProductList />} />
          <Route path="Register" element={<Register />} />
          <Route path="Login" element={<Login />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Product" element={<Product />} />

        
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));*/