const Header = () => {
  return (
    <header 
      className="text-center py-5 bg-warning text-dark rounded" 
      style={{
        backgroundImage: 'url(/img/header.jpg)', 
        backgroundSize: 'cover',  
        backgroundPosition: 'center',  
        color: 'white'  
      }}
    >
      <h1>Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

export default Header;
