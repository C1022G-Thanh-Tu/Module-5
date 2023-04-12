import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
// import productTypeService from "../service/productTypeService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
// import productService from "../service/productService";
import productServiceAPI from "../service/productServiceAPI";
import productTypeServiceAPI from "../service/productTypeServiceAPI";

function ProductEdit() {
  let navigate = useNavigate();
  let param = useParams();
  const [productTypes, setProductTypes] = useState([]);
  const [product, setProduct] = useState();
  useEffect(() => {
    getProductTypes();
    getProductDetail();
  }, []);
  const getProductTypes = async () => {
    const productTypesData = await productTypeServiceAPI.findAll();
    setProductTypes(productTypesData.data);
  };
  const getProductDetail = async () => {
    const productDetailData = await productServiceAPI.findById(param.id);
    setProduct(productDetailData.data);
  };
  if (!product) {
    return null;
  }
  return (
    <>
      <h1>Edit Product</h1>
      <Formik
        initialValues={{
          id: product?.id,
          name: product?.name,
          productTypeDTO: product?.productTypeDTO.id,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          productTypeDTO: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          try {
            const newValues = {
              ...values,
              productTypeDTO: { id: +values.productTypeDTO },
            };
            productServiceAPI.edit(newValues);
            toast("Edited Success");
            navigate("/");
          } catch (error) {
            toast("Edited Failed");
          }
        }}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Product Name
            </label>
            <Field
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="name"
            />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Product Type
            </label>
            <Field
              as="select"
              className="form-control"
              id="exampleInputPassword1"
              name="productTypeDTO"
            >
              <option value={0}>--- Choose Product Type ---</option>
              {productTypes.map((productType) => (
                <option key={productType.id} value={productType.id}>
                  {productType.name}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="typeId"
              component="div"
              className="text-danger"
            />
          </div>
          <button type="submit" className="btn btn-success me-3">
            Submit
          </button>
          <Link to="/" className="btn btn-primary">
            Cancel
          </Link>
        </Form>
      </Formik>
    </>
  );
}

export default ProductEdit;
