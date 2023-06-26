import newsletters from "../../assets/newsletters";
import NewsletterGrid from "../newsletter-grid/newsletterGrid";

const Home = () => {
  return (
    <>
      <NewsletterGrid newsletters={newsletters} />
    </>
  );
};

export default Home;
