import { useState } from "react";

const NewsletterModal = ({ open, onClose, newsletter }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form submitted");

    if (newsletter) {
      const url = `https://jtz9p1w4ne.execute-api.us-east-1.amazonaws.com/dev/subscribe`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          pubID: newsletter.pubID,
        }),
      };

      const response = await fetch(url, options);
      const data = await response;
      console.log(data);
      if (data.ok === true) {
        console.log("success");
      } else {
        console.error("Error submitting the form:", response.statusText);
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        open ? "" : "hidden"
      }`}
    >
      <div
        className="absolute inset-0 bg-gray-500 opacity-75"
        onClick={onClose}
      ></div>
      <div className="relative bg-gray-800 rounded-lg p-4 w-full sm:w-11/12 md:w-3/4 max-w-full mx-auto overflow-y-auto max-h-[90vh]">
        <div className="flex items-start my-10 mx-10">
          {newsletter && (
            <>
              <div className="hidden w-2/5 mr-4">
                <img
                  src={newsletter.image}
                  alt="Newsletter highlight"
                  className="w-full object-cover rounded"
                />
              </div>
              <div className="mx-20">
                <h2 className="text-6xl font-semibold mb-6">
                  {newsletter.name}
                </h2>
                <p className="mb-8 text-xl">{newsletter.description}</p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="email"
                      onChange={handleEmailChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  >
                    Submit
                  </button>
                </form>
                <div className="mt-10">
                  <a
                    href={newsletter.href}
                    className="text-m font-semibold leading-6 text-indigo-400"
                  >
                    Visit Website <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
