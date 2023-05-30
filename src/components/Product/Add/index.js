import React, { useState } from 'react';
import { addProducts } from '../../service/Employee';

const AddProductData = (props) => {
  const { handleClose, extendProductData } = props;
  const [addProduct, setAddProduct] = useState({
    name: '',
    category: '',
    price: '',
    status: ''
  })


 async function save() {
   await addProducts(addProduct).then((res) => {
      if(res){
        extendProductData(res);
      }
      handleClose();
    })
  }

  function handleOnChange(event) {
    setAddProduct({
      ...addProduct,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <div className="title text-center my-2">
        <h4>Add Product</h4>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={addProduct.name} onChange={handleOnChange} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input type="text" className="form-control" id="category" name='category' value={addProduct.category} onChange={handleOnChange} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" id="price" name='price' value={addProduct.price} onChange={handleOnChange}required />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <input type="text" className="form-control" id="status" name='status' value={addProduct.status} onChange={handleOnChange} required />
        </div>
        <div className="text-end">
          <button type='button' className="btn btn-danger mx-2" onClick={() => { handleClose() }}>cancel</button>
          <button type='button' className="btn btn-primary" onClick={save}>Save</button>
        </div>
      </form>
    </div>
  );
}

export default AddProductData
