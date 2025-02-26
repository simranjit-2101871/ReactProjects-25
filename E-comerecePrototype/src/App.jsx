/*import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [product, setProduct] = useState([])
  useEffect(() => {
    //Fetching the produncts from the provided api
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.product);

      })
      .catch((error) => {
        console.log("Some problemm in fetching the products")
      })
  }, []);



  return (
    <>
      {product.map((item) => (
        <div className='Container' key={item.id}>
          <h3>{item.title}</h3>
        </div>
      ))}
    </>
  )
}

export default App
*/
import { useState, useEffect } from 'react'
import './App.css'
import Nav from './components/Nav';
import Cart from './components/Cart';
//import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";


function App() {
  const [product, setProduct] = useState([]) // Initialize as an array
  const [hidden, setHidden] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selecteditle, setSelectedTitle] = useState(null);
  //const navigate = useNavigate();


  const addingToCart = (productID, productTitle) => {
    setSelectedProduct(productID);
    setSelectedTitle(productTitle);
    //navigate('/cart');
  };

  useEffect(() => {
    // Fetching the products from the provided API
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.products); // Access the products array
      })
      .catch((error) => {
        console.log("Some problem in fetching the products:", error)
      })
  }, []);

  return (

    <>
        <div><Nav /></div>
        <div className='main'>
          {product.map((item) => (
            <div className='Container' key={item.id}>
              <div className="card" onMouseEnter={() => setHidden(true)} onMouseLeave={() => setHidden(false)}>
                {hidden ? (
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                    <p>${item.price}</p>
                    <button onClick={() => addingToCart(item.id)}>Add To Cart</button>
                  </div>
                ) : (
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                    <p>${item.price}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Conditionally rendering Cart component */}
        {selectedProduct && <Cart id={selectedProduct}/>}
        {/*<Routes>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
        */}
      

    </>

  )

}
export default App
