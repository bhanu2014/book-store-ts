import React from 'react'
import './BookPaymentSection.css'
import { BookPaymentDetail } from './BookPaymentInterface'

interface Props {
    paymentInfo: BookPaymentDetail,
    checkoutOrder : () => void
}

const BookPaymentSection: React.FC<Props> = ({paymentInfo, checkoutOrder}) => {
    return (
        <div className="">
            <h2 className="shipping_heading">Payment Info</h2>
            <table className="cart_table">
                <tbody>
                    <tr>
                        <td>Items Price</td>
                        <td className="text-right">${paymentInfo.total}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td className="text-right">${paymentInfo?.tax}</td>
                    </tr>
                    <tr>
                        <td>Shipping Charge</td>
                        <td className="text-right">${paymentInfo?.shippingCharge}</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td className="text-right"><strong>${paymentInfo?.finalPrice}</strong></td>
                    </tr>
                </tbody>
            </table>
            <div className="text-right"><button type="button" className="product_btns btn1">Cancel</button>
                <button type="button" className="product_btns btn2" onClick={checkoutOrder}>Checkout Address</button></div>
        </div>
    )
}

export default BookPaymentSection
