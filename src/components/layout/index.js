import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import LoadingBar from "react-redux-loading-bar";

const Layout = ({ children }) => {
  const { authedUser } = useSelector((state) => state);
  return (
    <>
      <LoadingBar
        style={{ backgroundColor: "var(--color-red)", zIndex: "100" }}
      />
      {authedUser && <Header />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
