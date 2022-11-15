/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          book_id
          order_id
          bookID
          orderID
          createdAt
          updatedAt
          bookOrderBookId
          bookOrderOrderId
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBookOrder = /* GraphQL */ `
  query GetBookOrder($id: ID!) {
    getBookOrder(id: $id) {
      id
      book_id
      order_id
      book {
        id
        title
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      order {
        id
        user
        date
        total
        books {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      bookID
      orderID
      createdAt
      updatedAt
      bookOrderBookId
      bookOrderOrderId
      customer
    }
  }
`;
export const listBookOrders = /* GraphQL */ `
  query ListBookOrders(
    $filter: ModelBookOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        book_id
        order_id
        book {
          id
          title
          description
          image
          author
          featured
          price
          createdAt
          updatedAt
        }
        order {
          id
          user
          date
          total
          createdAt
          updatedAt
          customer
        }
        bookID
        orderID
        createdAt
        updatedAt
        bookOrderBookId
        bookOrderOrderId
        customer
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      books {
        items {
          id
          book_id
          order_id
          bookID
          orderID
          createdAt
          updatedAt
          bookOrderBookId
          bookOrderOrderId
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      customer
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        books {
          nextToken
        }
        createdAt
        updatedAt
        customer
      }
      nextToken
    }
  }
`;
