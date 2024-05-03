import newsletters from "../../assets/newsletters";
import NewsletterGrid from "../newsletter-grid/newsletterGrid";
import phone from "../../assets/phone.png";
import Companies from "../companies/companies";

const Home = () => {
  return (
    <>
      <div className="mt-90 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-30 lg:flex lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center mb-4 sm:mb-0">
            <h1 className="mb-8 text-4xl text-center text-white align-top">
              From stocks, to crypto and beyond.
            </h1>

            <div className="stats shadow mb-10 text-white flex flex-col md:flex-row">
              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title text-white">Readers</div>
                <div className="stat-value">68K+</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title text-white">Emails Sent</div>
                <div className="stat-value">10,000,000+</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title text-white">
                  Newsletters Acquired
                </div>
                <div className="stat-value">2</div>
              </div>
            </div>

            <h2 className="text-center align-top text-2xl text-white">
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
            Journals Brands
          </h2>
          <div className="flex justify-center">
            <NewsletterGrid newsletters={newsletters} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
