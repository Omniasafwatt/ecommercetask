import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free'
import Categories from './components/Categories/Categories';
import { RouterProvider,createBrowserRouter } from 'react-router-dom'; 
import Mainlayout from './Layouts/Mainlayout/Mainlayout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Brands from './components/Brands/Brands';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';
// import Mainslider from './components/Mainslider/Mainslider'
import Notfound from './components/Notfound/Notfound';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Registerlayout from './Layouts/Registerlayout/Registerlayout';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import Productdetails from './components/Productdetails/Productdetails';
import Storecontextprovider from './Context/Context';
import { ToastContainer } from 'react-toastify';
import Address from './components/Address/Address';
import ForgotPassword from './components/Forgetpass/Forgetpass';
import ResetPassword from './components/Resetpassword/Resetpass';


function App() {


  let routes = createBrowserRouter([
    { path:'/',element:<Mainlayout/>,children:[
      {index : true ,element:<ProtectedRoutes> <Home/></ProtectedRoutes>},
      {path :'home' ,element:<ProtectedRoutes> <Home/></ProtectedRoutes>},
      {path :'products' ,element:<ProtectedRoutes> <Products/></ProtectedRoutes>},
      {path :'categories' ,element:<ProtectedRoutes> <Categories/></ProtectedRoutes>},
      {path :'brands' ,element:<ProtectedRoutes> <Brands/></ProtectedRoutes>},
      {path :'cart' ,element:<ProtectedRoutes> <Cart/></ProtectedRoutes>},
      {path :'wishlist' ,element:<ProtectedRoutes> <Wishlist/></ProtectedRoutes>},
      {path :'address/:id' ,element:<ProtectedRoutes> <Address/></ProtectedRoutes>},
      {path :'productdetails/:id' ,element:<ProtectedRoutes> <Productdetails/></ProtectedRoutes>},
      {path : '*',element:<Notfound/>},
    ]},{ path:'/',element:<Registerlayout/>,children:[
      {path :'signup' ,element:<Signup/>},
      {path :'signout' ,element:<Signup/>},
      {path : 'signin',element:<Signin/>},
      {path : 'forgotpassword',element:<ForgotPassword/>},
      {path : 'resetPassword',element:<ResetPassword/>},
    ]}
  ]) 


  return (
    <>
    <Storecontextprovider>
    <RouterProvider router={routes} />

    <ToastContainer theme='colored' autoClose={700}/>

    </Storecontextprovider>

    </>
  );
}

export default App;
