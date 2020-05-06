import React from 'react'
import './CartList.css'
import { Book } from '../book/BookInterface'

interface Props {
    cart: Book[]
}

const CartList: React.FC<Props> = ({cart}) => {
    return (
        <>
            <h2 className="shipping_heading">Shopping Bag</h2>
            <div className="max_shipping_table">
                <table className="shipping_table">
                    <tbody>
                        {cart && cart.map(book => <tr>
                            <td className="shipping_img_td"><img className="ship_img" src={book?.thumbnailUrl} /></td>
                            <td><h5>{book?.title}</h5></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CartList
