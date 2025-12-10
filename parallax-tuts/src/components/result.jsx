import Footer from "./footer";
import Header from "./Header";

const Layout = ({ children }) => {
  

  return (
    <div className="w-full">
     <Header/> 
        <main className="w-full ">
        {children}
      </main>
      <Footer/>
     
    </div>
  );
};

export default Layout;