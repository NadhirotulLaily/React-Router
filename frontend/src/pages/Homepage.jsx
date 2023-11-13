import { Wrap, WrapItem} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";
 


export default function Homepage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
    <Wrap spacing={4} justify="center">
      {books?.books?.map((book) => (
        <WrapItem key={`${book.id} ${book.title}`}>
          <Books {...book} />
        </WrapItem>
      ))}
    </Wrap>
  );
}
