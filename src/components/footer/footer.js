import { FC, ReactElement } from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 relative bottom-0 w-full">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-white">Newsletters</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a
                  className="hover:opacity-75"
                  href="https://www.investingjournal.gg/"
                >
                  {" "}
                  Investing Journal{" "}
                </a>
                <a
                  className="hover:opacity-75"
                  href="https://crypto.journals.gg/"
                >
                  {" "}
                  Crypto Journal{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium text-white">Contact</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a
                  className="hover:opacity-75"
                  href="https://vtr4yvd7hvn.typeform.com/to/YZFk9ref?typeform-source=journals.gg"
                >
                  {" "}
                  Sponsor{" "}
                </a>
                <a className="hover:opacity-75" href="/contact">
                  {" "}
                  Contact{" "}
                </a>
              </nav>
            </div>

            <div>
              <p className="font-medium text-white">Socials</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a
                  className="hover:opacity-75"
                  href="https://twitter.com/InvestingJournl"
                >
                  {" "}
                  Twitter{" "}
                </a>
                <a
                  className="hover:opacity-75"
                  href="https://www.linkedin.com/company/journals-gg/"
                >
                  {" "}
                  Linkedin{" "}
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-white">© 2022 Journals gg</p>
      </div>
    </footer>
  );
};

export default Footer;
