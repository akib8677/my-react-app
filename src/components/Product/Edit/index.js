import React, { Fragment, useState } from 'react';
import { updateProducts } from '../../service/Employee';

const EditProductData = (props) => {
  const { handleClose, handelEdit, product } = props;

  const [updateProduct, setUpdateProduct] = useState({
    name: product?.name || '',
    category: product?.category || '',
    price: product?.price || '',
    status: product?.status || ''
  })

  async function save() {
    await updateProducts(product.id, updateProduct).then((updProduct) => {
      if(updProduct){
        handelEdit(updProduct)
      }
      handleClose();
    })
  }

  function handleChange(event) {
    setUpdateProduct({
      ...product,
      [event.target.name]: event.target.value
    })
  }

  return (
    <Fragment>
      <div className="title text-center my-2">
        <h4>Edit Product</h4>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' value={updateProduct.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input type="text" className="form-control" id="category" name='category' value={updateProduct.category} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" id="price" name='price' value={updateProduct.price} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <input type="text" className="form-control" id="status" name='status' value={updateProduct.status} onChange={handleChange} />
        </div>
        <div className="text-end">
          <button type="button"onClick={() => { handleClose() }} className="btn btn-danger">Cancel</button>
          <button type="button" className="btn btn-primary mx-2" onClick={ save }>Save</button>
        </div>
      </form>
    </Fragment>
  )
}

export default EditProductData
