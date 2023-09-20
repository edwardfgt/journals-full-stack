import { useState, useEffect } from "react";

const RecentPosts = () => {
  const [xmlData, setXmlData] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = `https://jtz9p1w4ne.execute-api.us-east-1.amazonaws.com/dev/rss`;
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
          console.log(parsedPosts);
          setPosts(parsedPosts);
        }
      })
      .catch((error) => {
        console.error("Error fetching XML data:", error);
      });
    console.log(xmlData);
  }, []);

  console.log(posts);
  return (
    <>
      {posts && posts.length > 0 ? (
        <div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                From the blog
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post, index) => (
                <article className="flex flex-col items-start justify-between">
                  <div className="relative w-full">
                    <img
                      src={post.image}
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time dateTime={post.pubDate} className="text-gray-500">
                        {post.pubDate}
                      </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.link}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900"></p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

export default RecentPosts;
