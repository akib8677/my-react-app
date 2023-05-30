import { useState, useEffect } from "react";
import { getProducts, updateProducts } from "../service/Employee";
import DataTable from "react-data-table-component";
import { AiFillEdit, AiFillDelete, AiFillEye } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';
import AddProductData from './Add'
import ViewProductData from './View'
import EditProductData from './Edit'
import { Spinner } from "../shared/index";
import DeleteModal from "../shared/Modal";

const ProductList = () => {
  const [action, setAction] = useState({action:'', id:''});
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [product, setproduct] = useState({})

  useEffect(() => {
    getProducts().then((d) => {
      if (d) {
        setProducts(d);
      }
    });
  }, []);

  const Action = (id) => {
    return (
      <div className="flex">
        <i className="m-2" role="button" onClick={() => { ViewProduct(id) }}><AiFillEye size={20} color={'blue'} /></i>
        <i className="m-2" role="button" onClick={() => { EditProduct(id) }}><AiFillEdit size={20} color={'green'} /></i>
        <i className="m-2" role="button" onClick={() => { HandelDeleteProduct(id) }}><AiFillDelete size={20} color={'red'} /></i>
      </div>
    )
  }

  const column = [
    {
      name: "Name",
      selector: (row) => row?.name,
    },
    {
      name: "Category",
      selector: (row) => row.category,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Actions",
      cell: (row) => Action(row.id),
    },
  ];

  const ViewProduct = (id) => {
    setAction('view')
    setShow(true);
    const result = products.find(p => p.id === id)
    setproduct(result)
  }

  const EditProduct = (id) => {
    setAction({action:'edit', id})
    setShow(true);
    let result = products.find(p => p.id === id)
    setproduct(result);
  }

  const HandelDeleteProduct = (id) => {
    setAction({action:'delete', id})
    setShow(true);
      const filterProduct = products.filter(p => p.id !== id)
    }

  const AddProduct = () => {
    setAction({action:'add', id:''})
    setShow(true)
  }

  const extendProductData = (data) => {
    setProducts([...products, data])
  }

  const updateProduts = (rslt, id) => {
    const filterProduct = products.filter(p => p.id !== id)
    setProducts([...filterProduct])
  }

  const handelEdit = (data) => {
   const newProduct = [...products];
   const index = newProduct.findIndex((res) => res.id === data.id)
   newProduct[index] = data;
   setProducts(newProduct);
  }



  const handleClose = () => {
    setShow(false);
  }

  return (
    <>
      <div className="mt-2">
        <div className="d-flex justify-content-end mx-4">
          <button type="button" className="btn btn-primary" onClick={AddProduct}>Add Product</button>
        </div>
        {
          products.length === 0 ? (<Spinner />) :
            (
              <DataTable
                columns={column}
                data={products}
                pagination={true}
              />
            )}
      </div>

      <Modal show={show}>
        <Modal.Body>
          {action.action === 'delete' && <DeleteModal id={action.id} handleClose={handleClose} updateProductData={updateProduts} />}
          {action.action === 'add' && <AddProductData handleClose={handleClose} extendProductData={extendProductData} />}
          {action === 'view' && <ViewProductData handleClose={handleClose} product={product} />}
          {action.action === 'edit' && <EditProductData handleClose={handleClose} product={product} handelEdit={handelEdit} />}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductList;
