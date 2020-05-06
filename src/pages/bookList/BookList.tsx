import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getfetchBooksInit} from '../../store/actions/book'
import {addToCart} from '../../store/actions/cart'
import BookComponent from '../../components/book/Book'
import {Book } from '../../components/book/BookInterface'
import "./BookList.css";

interface data {
  data: Book[]
}

interface RootState {
  book: data
}


const  BookList: React.FC = () => {

  const history:any = useHistory();
  const dispatch = useDispatch();

  const books = useSelector((state: RootState) => state?.book?.data);

  useEffect(() => {
    dispatch(getfetchBooksInit());
  }, []);

  const onClickBuy = (book: Book) => {
    dispatch(addToCart(book))
    history.push(process.env.REACT_APP_ROUTE_CHECKOUT)
  }

  return (
    <section>
      <div className="container-main">
        <div className="books_box">
          {books &&
            books.map((book, index) => <BookComponent book={book} onClickBuy={onClickBuy} index={index} />)}
        </div>
      </div>
    </section>
  );
}

export default BookList;
