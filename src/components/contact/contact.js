import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form submitted");
    const url =
      "https://jtz9p1w4ne.execute-api.us-east-1.amazonaws.com/dev/email";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        subject: subject,
        message: message,
      }),
    };

    const response = await fetch(url, options);
    const data = await response;
    console.log(data);
    if (data.ok === true) {
      setSuccess(true);
      console.log(success);
    } else {
      console.error("Error submitting the form:", response.statusText);
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <div className="px-4 mx-auto max-w-2xl">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Say hi
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
          Alternatively, send us an email mail@journals.gg
        </p>
        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleEmailChange}
              className="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white shadow-sm-light"
              placeholder="billgates@microsoft.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              onChange={handleSubjectChange}
              className="block p-3 w-full text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              onChange={handleMessageChange}
              className="block p-2.5 w-full text-sm rounded-lg border border-gray-600 focus:ring-primary-500 focus:border-primary-500 bg-gray-700 placeholder-gray-400 text-white shadow-sm-light"
              placeholder="Your message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-outline">
            Send message
          </button>

          {success && (
            <div className="alert alert-success shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Your form has been submitted!</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
