export interface Book{
    title: string,
    isbn: string,
    pageCount: string,
    publishedDate: object,
    thumbnailUrl: string,
    shortDescription: string,
    longDescription: string,
    status: string,
    categories:Array<string>,
    price: number,
    author: string
  }