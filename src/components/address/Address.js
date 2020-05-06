import React from 'react'
import './Address.css'

function Address() {
    return (
        <>
            <h2 className="shipping_heading">Shipping Address</h2>
            <div className="form-box">
                <div className="form-group">
                    <label className="custom-label">Name</label>
                    <input type="text" className="form-control" id="" name="" />
                </div>
                <div className="form-group">
                    <label className="custom-label">Email</label>
                    <input type="email" className="form-control" id="" name="" />
                </div>
                <div className="form-group">
                    <label className="custom-label">Phone number</label>
                    <input type="text" className="form-control" id="" name="" />
                </div>
                <div className="form-group">
                    <label className="custom-label">Address</label>
                    <textarea className="form-control" style={{ "height": "auto", "rows": 3 }}></textarea>
                </div>
            </div>
            <div><button type="button" className="product_btns btn2">Save Address</button><button type="button" className="product_btns btn1">Edit Address</button></div>
        </>
    )
}

export default Address
