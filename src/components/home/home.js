import newsletters from "../../assets/newsletters";
import NewsletterGrid from "../newsletter-grid/newsletterGrid";
import phone from "../../assets/phone.png";
import Companies from "../companies/companies";

const Home = () => {
  return (
    <>
      <div className="mt-90 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-30 lg:flex lg:px-8 lg:pt-20">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="mb-4 text-6xl text-center text-white">
              Journals.gg
            </h1>
            <h2 className="mb-10 text-center text-white">
              We publish a selection of newsletters covering the world of
              emerging investments. We keep tens of thousands of engaged
              investors ahead of the curve - from stocks, to crypto and beyond.
              No BS, no fluff and no spam - We help our readers become a better
              investor in 5 minutes per day.
            </h2>
          </div>
          <div>
            <img src={phone}></img>
          </div>
        </div>
      </div>
      <div className="mb-40">
        <Companies />
      </div>
      <div className="Publications">
        <div>
          <h2 className="text-center text-2xl font-semibold leading-8 text-white mb-10">
            Our Brands
          </h2>
          <NewsletterGrid newsletters={newsletters} />
        </div>
      </div>
    </>
  );
};

export default Home;
