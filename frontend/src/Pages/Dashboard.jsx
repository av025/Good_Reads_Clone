import BookCard from "src/Components/BookCard/BookCard";
import Layout from "src/Layouts/Layout";

function Dashboard() {
  return (
    <>
      <Layout>
        <BookCard
          bookTitle={
            "Skandar and the Spirit War Unmissable finale to the adventure series that everyone is talking about!"
          }
          bookAuthor={" A.F. STEADMAN"}
          bookDescription={`The most popular children’s fantasy hero since Harry Potter`}
        />
      </Layout>
    </>
  );
}

export default Dashboard;
