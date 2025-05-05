import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./components/cart";  // Asegúrate de que esto esté descomentado
import Home from "./components/Home";


// Comenta los componentes de login y registro
// import Home from "./components/Home";
// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";

const App = () => {
  return (
    <div>
      <Navbar />
       <Home />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
       {/* <Cart /> */}
      <Footer />
    </div>
  );
};

export default App;
