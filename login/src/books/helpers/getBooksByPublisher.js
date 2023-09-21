import { books } from "../data/books";

export const getBooksByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not valid publisher`);
  }

  return books.filter((book) => book.publisher == publisher);
};
