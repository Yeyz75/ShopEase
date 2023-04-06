import React from "react";

const ProductTable = ({
  products,
  handleProductChange,
  handleProductDelete,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              {/* Input controlado para el nombre del producto */}
              <input
                type="text"
                value={product.productName}
                onChange={(e) =>
                  // Llama a la función handleProductChange para actualizar el nombre del producto
                  handleProductChange(e, product.id, "productName")
                }
              />
            </td>
            <td>
              {/* Input controlado para la descripción del producto */}
              <input
                type="text"
                value={product.description}
                onChange={(e) =>
                  // Llama a la función handleProductChange para actualizar la descripción del producto
                  handleProductChange(e, product.id, "description")
                }
              />
            </td>
            <td>
              {/* Input controlado para el precio del producto */}
              <input
                type="number"
                value={product.price}
                onChange={(e) =>
                  // Llama a la función handleProductChange para actualizar el precio del producto
                  handleProductChange(e, product.id, "price")
                }
              />
            </td>
            <td>
              {/* Botón para eliminar el producto */}
              <button onClick={() => handleProductDelete(product.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
