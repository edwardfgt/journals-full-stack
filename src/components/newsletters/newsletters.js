import RecentPosts from "../RecentPosts/RecentPosts";

const RSS_URL = `https://rss.beehiiv.com/feeds/hhU1hZ5vnX.xml`;
const investingAPI =
  "https://jtz9p1w4ne.execute-api.us-east-1.amazonaws.com/dev/rss";
const cryptoAPI =
  "https://jtz9p1w4ne.execute-api.us-east-1.amazonaws.com/dev/cryptorss";

const NewsletterStats = [
  {
    name: "Investing Journal",
    description:
      "Our flagship publication - Bitesize market-moving news, summaries and links from the world of investing, three times a week.",
    subscribers: "36,000+",
    openRate: "35.1%",
    ctr: "2.16%",
    sponsorships: "Open",
    href: "https://www.investingjournal.gg/",
  },
  {
    name: "Crypto Journal",
    description:
      "Bitesize market-moving news, summaries and links from the world of Crypto and Web3, twice a week.",
    subscribers: "5000+",
    openRate: "39.6%",
    ctr: "1.66%",
    sponsorships: "Closed",
    href: "https://crypto.journals.gg/",
  },
  {
    name: "AI Journal",
    description:
      "Bitesize market-moving news, summaries and links from the world of AI and Machine Learning, every Friday.",
    subscribers: "3300+",
    openRate: "26.83%",
    ctr: "3.29%",
    sponsorships: "Closed",
    href: "https://ai.journals.gg/",
  },
];

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
          <div className="pt-14">
            <RecentPosts url={investingAPI} newsletter="Investing Journal" />
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"></dl>
          </div>

          <div className="pt-7">
            <RecentPosts url={cryptoAPI} newsletter="Crypto Journal" />
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"></dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletters;
