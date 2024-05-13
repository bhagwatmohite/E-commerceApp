// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import './App.css';
// import DashboardLayout from './Components/Layout/DashboardLayout';
// import Login from './Components/Login';
// import About from './Pages/About';
// import Analytics from './Pages/Analytics';
// import Comment from './Pages/Comments';
// import Dashboard from './Pages/Dashboard';
// import ProductList from './Pages/ProductList';
// import Products from './Pages/Products';

// function App() {

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         {/* Define dashboard routes with DashboardLayout */}
//         <Route path="/dashboard/*" element={<DashboardLayout />}>
//           {/* Default dashboard page (e.g., /dashboard) */}
//           <Route index element={<Dashboard />} />
//           <Route path="about" element={<About />} />
//           <Route path="comment" element={<Comment />} />
//           <Route path="analytics" element={<Analytics />} />
//           <Route path="product" element={<Products />} />
//           <Route path="productList" element={<ProductList />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
// import DashboardLayout from './Components/Layout/DashboardLayout';
import Login from './Components/Login';
// import About from './Pages/About';
import Analytics from './Pages/Analytics';
// import Comment from './Pages/Comments';
// import ProductList from './Pages/ProductList';
// import Products from './Pages/Products';
import { useState } from 'react';
import ForgotPassword from './Components/ForgotPassword';
import DashboardLayout from './Components/Layout/DashboardLayout';
import SignUp from './Components/Signup';
import Customers from './Pages/Customers';
import Dashboard from './Pages/Dashboard';
import Payments from './Pages/Payments';
import PrivateRoutes from "./Pages/PrivateRoutes";
import Products from './Pages/Products';
import Reports from './Pages/Reports';

function App() {

  //login ogout
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log('onlonegin classed')
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   localStorage.setItem("isLoggedIn", false);
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />

        {/* <Route path="/dashboard/*" element={<DashboardLayout />}>
         
          <Route index element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="comment" element={<Comment />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="product" element={<Products />} />
          <Route path="productList" element={<ProductList />} />
        </Route>  */}
        {/* <Route element={<Dashboard />}></Route>
         */}
        <Route path="/" element={<Login />}> </Route>

        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />


        <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={
              <PrivateRoutes path='/dashboard' isLoggedIn={isLoggedIn}>
                <Dashboard />
              </PrivateRoutes>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoutes path='/products' isLoggedIn={isLoggedIn}>
                <Products />
              </PrivateRoutes>
            }
          />
          <Route
            path="/customers"
            element={
              <PrivateRoutes path='/customers' isLoggedIn={isLoggedIn}>
                <Customers />
              </PrivateRoutes>
            }
          />
          <Route
            path="/reports"
            element={
              <PrivateRoutes path='/reports' isLoggedIn={isLoggedIn}>
                <Reports />
              </PrivateRoutes>
            }
          />
          <Route
            path="/analytics"
            element={
              <PrivateRoutes path='/analytics' isLoggedIn={isLoggedIn}>
                <Analytics />
              </PrivateRoutes>
            }
          />
          <Route
            path="/payments"
            element={
              <PrivateRoutes path='/payments' isLoggedIn={isLoggedIn}>
                <Payments />
              </PrivateRoutes>
            }
          />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
