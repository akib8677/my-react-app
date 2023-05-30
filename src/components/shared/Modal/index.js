import React from 'react'
import { deleteProducts } from "../../service/Employee";

const Modal = (props) => {
    const { handleClose, id, updateProductData } = props;

    async function deleteProduct() {
        const rslt = await deleteProducts(id)
        if(rslt){
            updateProductData(rslt,id)
        }
        handleClose();
    }

    return (
        <>
            <div className='model'>
                <div className='text-center'>
                    <h4>Confirmation</h4>
                </div>
                <hr />
                <div className='text-center'>
                    <p>Are you sure you want to delete this product?</p>
                </div>
                <hr />
                <div className='d-flex justify-content-end'>
                    <button type="button" className="btn btn-warning mx-2" onClick={() => { handleClose() }}>Cencel</button>
                    <button type="button" className="btn btn-primary" onClick={deleteProduct}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default Modal
