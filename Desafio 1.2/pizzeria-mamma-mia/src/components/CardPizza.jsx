import React from "react";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="mb-4" style={{ minWidth: "300px", flex: "0 0 auto" }}>
      <div className="card h-100 shadow">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <ul className="list-unstyled">
            {ingredients.map((item, index) => (
              <li key={index}>🍕 {item}</li>
            ))}
          </ul>
          <p className="fw-bold">Precio: ${price.toLocaleString()}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-primary">Ver más</button>
            <button className="btn btn-primary">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza; 
