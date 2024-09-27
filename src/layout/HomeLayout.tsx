import Header from "./Header";
import Footer from "./Footer";
import FindDaycare from "../components/pages/FindDaycare";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <FindDaycare />
      <Footer />
    </div>
  );
};

export default HomeLayout;
