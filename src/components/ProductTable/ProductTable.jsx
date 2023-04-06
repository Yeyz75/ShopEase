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
              <input
                type="text"
                value={product.productName}
                onChange={(e) =>
                  handleProductChange(e, product.id, "productName")
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={product.description}
                onChange={(e) =>
                  handleProductChange(e, product.id, "description")
                }
              />
            </td>
            <td>
              <input
                type="number"
                value={product.price}
                onChange={(e) => handleProductChange(e, product.id, "price")}
              />
            </td>
            <td>
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
