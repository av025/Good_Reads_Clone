import { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "src/Components/BookCard/BookCard";
import Layout from "src/Layouts/Layout";
import { getAllBooks } from "src/Store/Slices/bookSlice";

function Dashboard() {
const bookState = useSelector((state) => state.book);
const dispatch = useDispatch(); 

async function loadBooks() { 
  if(bookState.bookList.length === 0) {
         const response = await dispatch(getAllBooks()); 
         console.log(response)
  }

}

useEffect(() => { 
  loadBooks()
}, []);

  return (
    <>
      <Layout>
        {bookState.bookList.length > 0 && bookState.bookList.map((book) => {
          return <BookCard key={book.id}  />
        })}
      </Layout>
    </>
  );
}

export default Dashboard;
