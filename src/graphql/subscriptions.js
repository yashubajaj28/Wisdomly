/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
    onCreateBook(filter: $filter) {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
    onUpdateBook(filter: $filter) {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
    onDeleteBook(filter: $filter) {
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
export const onCreateBookOrder = /* GraphQL */ `
  subscription OnCreateBookOrder(
    $filter: ModelSubscriptionBookOrderFilterInput
    $customer: String
  ) {
    onCreateBookOrder(filter: $filter, customer: $customer) {
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
export const onUpdateBookOrder = /* GraphQL */ `
  subscription OnUpdateBookOrder(
    $filter: ModelSubscriptionBookOrderFilterInput
    $customer: String
  ) {
    onUpdateBookOrder(filter: $filter, customer: $customer) {
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
export const onDeleteBookOrder = /* GraphQL */ `
  subscription OnDeleteBookOrder(
    $filter: ModelSubscriptionBookOrderFilterInput
    $customer: String
  ) {
    onDeleteBookOrder(filter: $filter, customer: $customer) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $customer: String
  ) {
    onCreateOrder(filter: $filter, customer: $customer) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $customer: String
  ) {
    onUpdateOrder(filter: $filter, customer: $customer) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $customer: String
  ) {
    onDeleteOrder(filter: $filter, customer: $customer) {
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
