import { useState, useEffect } from "react";

const RecentPosts = ({ url, newsletter }) => {
  const [posts, setPosts] = useState([]);
  const tempPosts = [0, 0, 0];

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.body) {
          const parsedPosts = JSON.parse(data.body);
          const formattedPosts = parsedPosts.map((post) => {
            let date = new Date(post.pubDate);
            let day = String(date.getDate()).padStart(2, "0");
            let month = String(date.getMonth() + 1).padStart(2, "0");
            let year = date.getFullYear();
            let formattedDateStr = `${day}/${month}/${year}`;
            return { ...post, formattedDateStr };
          });
          setPosts(formattedPosts);
        }
      })
      .catch((error) => {
        console.error("Error fetching XML data:", error);
      });
  }, []);

  return (
    <>
      {posts && posts.length > 0 ? (
        <div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                {newsletter}
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-300">
                Recent Posts
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post, index) => (
                <div
                  className="border border-stone-400 shadow rounded-md p-4 max-w-sm w-full mx-auto hover:border-blue-100 hover:bg-gray-900"
                  onClick={() => (window.location.href = post.link)}
                  role="button"
                  tabIndex="0"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") window.location.href = post.link;
                  }}
                >
                  <article className="flex flex-col items-start">
                    <a href={post.link}>
                      <div className="relative w-full">
                        <img
                          src={post.image}
                          alt="Investing Journal edition preview"
                          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                        />

                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                      </div>
                    </a>
                    <div className="max-w-xl">
                      <div className="mt-8 flex items-center gap-x-4 text-s">
                        <time
                          dateTime={post.formattedDateStr}
                          className="text-gray-300"
                        >
                          {post.formattedDateStr}
                        </time>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-300 group-hover:text-gray-600">
                          <a href={post.link}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-m leading-6 text-gray-300">
                          {post.description}
                        </p>
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-300"></p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                {newsletter}
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-300">
                Recent Posts
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {Array(3)
                .fill()
                .map((_, index) => (
                  <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                      <div className="rounded-full bg-slate-700 h-12 w-12"></div>
                      <div className="flex-1 space-y-6 py-1">
                        <div className="h-4 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                          <div className="h-4 bg-slate-700 rounded"></div>
                          <div className="h-4 bg-slate-700 rounded"></div>
                          <div className="h-4 bg-slate-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecentPosts;
