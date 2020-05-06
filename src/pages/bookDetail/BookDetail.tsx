import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { addToCart } from '../../store/actions/cart'
import './BookDetail.css'
import { Book } from '../../components/book/BookInterface';

interface data {
    data: Book[]
  }
  
  interface RootState {
    book: data
  }

const BookDetail: React.FC = () => {

    const history: any = useHistory();
    const dispatch = useDispatch()
    const { isbn } = useParams()
    const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined)
    const books = useSelector((state: RootState) => state?.book?.data);


    useEffect(() => {
        setSelectedBook(books.find(book => book.isbn === isbn))
    }, [isbn])

    const onClickBuy = (book:Book | undefined) => {
        dispatch(addToCart(book))
        history.push(process.env.REACT_APP_ROUTE_CHECKOUT)
    }

    return (
        <section>
            <div className="container-main">
                <div className="product_img">
                    <div className="text-center"><img className="img_prod" src={selectedBook?.thumbnailUrl} /></div>
                </div>
                <div className="product_content">
                    <div>
                        <h2 className="product_heading">{selectedBook?.title}</h2>
                        <h5 className="product_price">5.89$</h5>
                        <p className="p_desc">Author:<span className="spn_desc">{selectedBook?.author}</span></p>
                        <p className="p_desc">Page Count:<span className="spn_desc">{selectedBook?.pageCount}</span></p>
                        <p className="p_desc">ISBN:<span className="spn_desc">{selectedBook?.isbn}</span></p>
                        <p className="p_desc">Price:<span className="spn_desc">{selectedBook?.price}</span></p>
                        <div><button type="button" className="product_btns btn1" onClick={() => dispatch(addToCart(selectedBook))}>Add to Cart</button>
                            <button type="button" className="product_btns btn2" onClick={(e) => onClickBuy(selectedBook)}>Buy now</button></div>
                        <p className="main_desc">{selectedBook?.longDescription}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookDetail
