import React from 'react'
import './Order.css'
import { OrderBook } from './OrderInterface'

interface Props {
    order: OrderBook
}

const OrderComponent: React.FC<Props> = ({order}) => {
    return (
        <div className="order_box">
            <div>
                <table className="status_table">
                    <tbody>
                        <tr>
                            <td>Order placed:<span className="table_span">{order?.date.toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                            }).split(' ').join('-')}</span></td>
                            <td className="text-right">Status:<span className="table_span">{order?.status}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table className="status_inside_table">
                    <tbody>
                        <tr>
                            <td className="status_img"><img className="list_img" src={order?.thumbnailUrl} /></td>
                            <td>
                                <div>
                                    <h2 className="product_heading">{order?.title}</h2>
                                    <h5 className="product_price">{order?.price}$</h5>
                                    <p className="p_desc">Author:<span className="spn_desc">{order?.author}</span></p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderComponent
