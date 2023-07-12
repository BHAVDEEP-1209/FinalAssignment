import {Routes , Route} from "react-router-dom";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"
import AddProduct from "./pages/AddProduct"
import "./Styles/App.scss"
import Profile from "./pages/Profile";
import Store from "./components/Store";
import Account from "./components/Account";
import Orders from "./components/Orders";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/homepage" element={<Homepage />}/>
        <Route path="/addProduct" element={<AddProduct />}/>
        <Route path="profile" element={<Profile />}>
          <Route index element={<Store />} />
          <Route path="store" element={<Store />} />
          <Route path="account" element={<Account />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
