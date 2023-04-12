import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import productService from "../service/productService";
// import productTypeService from "../service/productTypeService";
import { Link } from "react-router-dom";
import ModalDelete from "../util/ModalDelete";
import productServiceAPI from "../service/productServiceAPI"
import productTypeServiceAPI from "../service/productTypeServiceAPI"

function Product() {
  const [products, setProducts] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [deletedId, setDeletedId] = useState()
  const [deletedName, setDeletedName] = useState('')
  useEffect(() => {
    getProducts();
    getProductTypes();
  }, []);
  const getProducts = async () => {
    const productsData = await productServiceAPI.findAll();
    setProducts(productsData.data);
  };
  const getProductTypes = async () => {
    const productTypesData = await productTypeServiceAPI.findAll();
    setProductTypes(productTypesData.data);
  };
  const handleTransferInfo = (id, name) => {
    setDeletedId(id)
    setDeletedName(name)
  }
  return (
    <>
      <Link to="/create" className="btn btn-success mb-5">
        Add new Product
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Stt</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>
                {
                  productTypes.filter(
                    (productType) => productType.id === product.productTypeDTO.id
                  )[0]?.name
                }
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => handleTransferInfo(product.id, product.name)}
                >
                  Delete
                </button>
                <Link to={`/edit/${product.id}`} className='btn btn-primary ms-3'>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalDelete
        id= {deletedId}
        name={deletedName}
        getList={() => {
          getProducts()
        }}
      />
    </>
  );
}

export default Product;
