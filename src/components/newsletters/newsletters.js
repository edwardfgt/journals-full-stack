import RecentPosts from "../RecentPosts/RecentPosts";

const RSS_URL = `https://rss.beehiiv.com/feeds/hhU1hZ5vnX.xml`;
const investingAPI =
  "https://jtz9p1w4ne.execute-api.us-east-1.amazonaws.com/dev/rss";
const cryptoAPI =
  "https://jtz9p1w4ne.execute-api.us-east-1.amazonaws.com/dev/cryptorss";

const Newsletters = () => {
  return (
    <div>
      <div className="mt-5 p-5 pt-14 text-white">
        <div className="mx-20">
          <div className="mx-auto mt-12 max-w-7xl px-6 sm:mt-8 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Newsletters{" "}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We're the go-to source for market news and investing insights,
                trusted by <b>tens of thousands</b> of engaged retail and
                institutional investors. From <b>CEOs</b> and{" "}
                <b>hedge fund managers</b> to <b>amateur traders</b>, our
                audience consists of finance and technology workers looking to
                understand the world of <b>emerging investments</b>.
                <br />
                Interested in advertising with us? Get in touch!
              </p>
            </div>
          </div>
          <div className="pt-14 mb-14">
            <RecentPosts url={investingAPI} newsletter="Investing Journal" />
          </div>

          <div className="pt-7 mb-14">
            <RecentPosts url={cryptoAPI} newsletter="Crypto Journal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletters;
