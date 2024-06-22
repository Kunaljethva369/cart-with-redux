import { Provider } from 'react-redux';
import './App.css';
import Header from './Components/Headers.jsx';
import ProductList from './Components/ProductList.jsx';
import store from './store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartList from './Components/CartList.jsx';

function App() {

  const guide = createBrowserRouter([
    {
      children: [
        { path: "/", element: <>
          <Header/>
          <ProductList /> 
        </>
        },
        {
          path: "/cart",
          element: <>
            <Header />
            <CartList/>
          </>
        }
      ]
    }
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={guide}/>
      </Provider>
    </>
  )
}

export default App
