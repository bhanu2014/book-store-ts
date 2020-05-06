import { Book } from "../book/BookInterface";

export interface Order {
    orderId?: string
    items?: Book[],
    status?: string,
    date?: Date
}

export  interface OrderBook extends Book {
    status: string,
    date:any
}