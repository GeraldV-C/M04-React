import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import formatPrice from '../utils/formatPrice';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">🍕 Home</a>
      <div className="ms-auto d-flex gap-2">
        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light">🔐 Login</button>
            <button className="btn btn-outline-light">🔐 Register</button>
          </>
        )}
        <button className="btn btn-success">🛒 Total: ${formatPrice(total)}</button>
      </div>
    </nav>
  );
};

export default Navbar;
