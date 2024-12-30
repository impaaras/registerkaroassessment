const blogPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000",
    author: "Prabhash Mishra",
    date: "1 Jan 2023",
    title: "Small business & Startup",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Tax & Audit", "Management"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000",
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Audit", "Money Back"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Tax", "Research", "Compliance"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000",
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Audit", "Money Back"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Tax", "Research", "Compliance"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000",
    author: "Prabhash Mishra",
    date: "1 Jan 2023",
    title: "Small business & Startup",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Tax & Audit", "Management"],
  },
];

export function BlogSection() {
  return (
    <section className="py-16 md:px-20 px-6">
      <div className="container mx-auto">
        <p className="text-center text-[#F0813C] text-sm mb-2">
          EXPLORE OUR BLOGS
        </p>
        <h2 className="text-center text-3xl font-bold text-[#472D1E] mb-12">
          Accelerate Digital Transformation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden hover:shadow-lg  transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="py-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-[#472D1E]">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4">{post.description}</p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#1c4670] text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-opacity-90 transition-colors">
            Show more blogs
          </button>
        </div>
      </div>
    </section>
  );
}
