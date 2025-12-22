import React from "react";

export default function Card(props) {
  return (
    <div className="w-64">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <img src={props.img} alt={props.title} className="w-full h-40 object-cover" />

        <div className="p-4">
          <p className="text-lg font-semibold mb-1">{props.title}</p>
          <p className="text-gray-600 mb-4">{props.price}</p>

          <div className="flex justify-between items-center space-x-2">
            <button
              onClick={props.onAdd}
              className="flex-1 border border-gray-400 text-gray-700 px-3 py-1 text-sm rounded
                         hover:bg-gray-100 transition"
            >
              Ajouter au panier
            </button>
            <button
              onClick={props.onDelete}
              className="flex-1 border border-red-500 text-red-500 px-3 py-1 text-sm rounded
                         hover:bg-red-500 hover:text-white transition"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
