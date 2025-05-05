import React from "react";

const CardPizza = ({ pizza }) => {
  return (
    <div className="border rounded-xl shadow-lg p-4">
      <img
        src={pizza.img}
        alt={pizza.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold mt-2">{pizza.name}</h2>
      <p className="text-gray-700 font-semibold">Precio: ${pizza.price}</p>

      <h3 className="mt-2 font-semibold">Ingredientes:</h3>
      <ul className="list-disc list-inside text-sm text-gray-600">
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardPizza;
