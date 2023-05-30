import React, { Fragment, useState } from 'react'

const JsonForm = (props) => { 
  const { initialData, onSave, onCancel } = props;

  const [data, setData] = useState({
    name: initialData.name,
    category: initialData.category,
    price: initialData.price,
    status: initialData.status
  });

  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  return (
    <Fragment>
      <form className='container my-2'>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' value={data.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input type="text" className="form-control" id="category" name='category' value={data.category} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" id="price" name='price' value={data.price} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <input type="text" className="form-control" id="status" name='status' value={data.status} onChange={handleChange} />
        </div>
        <div className="text-end">
          <button type="button" onClick={() => { onCancel() }} className="btn btn-danger">Cancel</button>
          <button type="button" className="btn btn-primary mx-2" onClick={() => { onSave(data) }}>Save</button>
        </div>
      </form>
    </Fragment>
  )
}

export default JsonForm
