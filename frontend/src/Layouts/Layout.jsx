import Footer from "src/Components/Footer/Footer";
import Navbar from "src/Components/Navbar/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="h-[90vh] flex justify-center items-start">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
