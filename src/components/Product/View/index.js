import React, { Fragment } from 'react'

const ViewProductData = (props) => {
  const { handleClose, product } = props;
  return (
    <Fragment>
      <table className="table caption-top">
        <caption className="h4 text-center">List of products</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{product?.name}</th>
            <th scope="row">{product?.category}</th>
            <th scope="row">{product?.price}</th>
            <th scope="row">{product?.status}</th>
          </tr>
        </tbody>
      </table>
      <div className="text-end">
        <button type="button" onClick={() => { handleClose() }} className="btn btn-outline-primary">Close</button>
      </div>
    </Fragment>
  )
}

export default ViewProductData
