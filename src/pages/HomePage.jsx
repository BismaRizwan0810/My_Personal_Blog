import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import BlogCard from "../components/BlogCard";

const postsData = [
  {
    id: 1,
    title: "React Basics",
    category: "Tech",
    description: "Learn the fundamentals of React step by step.",
    date: "2025-09-01",
    image:
      "https://www.etatvasoft.com/blog/wp-content/uploads/2023/05/React-Fundamentals.jpg",
  },
  {
    id: 2,
    title: "Traveling in Turkey",
    category: "Travel",
    description: "My amazing journey through Istanbul and Cappadocia.",
    date: "2025-08-15",
    image:
      "https://cdn.kimkim.com/files/a/content_articles/featured_photos/ef0c861ee0914180db397a707449da61fe1445ce/big-d3a6d8eb1d40b53a47c9202844fe0cd0.jpg",
  },
  {
    id: 3,
    title: "Delicious Pasta Recipe",
    category: "Food",
    description: "Try this easy and tasty homemade pasta recipe.",
    date: "2025-07-20",
    image:
      "https://www.inspiredtaste.net/wp-content/uploads/2019/02/Vegetable-Spaghetti-Recipe-2-1200.jpg",
  },
  {
    id: 4,
    title: "Advanced JavaScript",
    category: "Tech",
    description: "Understanding closures, promises, and async/await.",
    date: "2025-06-11",
    image:
      "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
  },
  {
    id: 5,
    title: "Street Food in Karachi",
    category: "Food",
    description: "Exploring the best street food spots in Karachi.",
    date: "2025-05-30",
    image:
      "https://www.divaonline.com.pk/wp-content/uploads/2019/08/pjimage-21.jpg",
  },
  {
    id: 6,
    title: "Hiking in the Himalayas",
    category: "Travel",
    description: "An unforgettable adventure in the mountains.",
    date: "2025-05-10",
    image:
      "https://i0.wp.com/chalotravellers.com/wp-content/uploads/2024/07/Phulara-Ridge-Trek-Mountains-View.webp?resize=636%2C426&ssl=1",
  },
  {
    id: 7,
    title: "Mastering TailwindCSS",
    category: "Tech",
    description: "Design modern UIs with TailwindCSS.",
    date: "2025-04-01",
    image:
      "https://www.okoone.com/wp-content/uploads/2024/10/tailwindcss-logo.png",
  },
  {
    id: 8,
    title: "French Cuisine Tour",
    category: "Food",
    description: "Exploring delicious French dishes in Paris.",
    date: "2025-03-15",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZOzztDS0AGPvtBzHVwfoDzEXaTyNniXAjVg&s",
  },
  {
    id: 9,
    title: "Backpacking Europe",
    category: "Travel",
    description: "Tips and tricks for budget travel in Europe.",
    date: "2025-02-28",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0_Hf7S5cH1pQrDsy8EdIf6UA14QxbKd8jtw&s",
  },
];

function HomePage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(6); // ✅ Initially show 6 posts

  // Filtered posts
  const filteredPosts = postsData.filter((post) => {
    return (
      (category === "All" || post.category === category) &&
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  const currentPosts = filteredPosts.slice(0, visiblePosts);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-yellow-200">
      <Header />
      <FilterBar
        category={category}
        setCategory={(cat) => {
          setCategory(cat);
          setVisiblePosts(6); // reset on filter
        }}
        search={search}
        setSearch={(val) => {
          setSearch(val);
          setVisiblePosts(6); // reset on search
        }}
      />

      {/* Blog Cards with Animation */}
      <main className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {currentPosts.length > 0 ? (
          currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full text-center">
            No posts found.
          </p>
        )}
      </main>

      {/* Load More Button */}
      {visiblePosts < filteredPosts.length && (
        <div className="flex justify-center pb-10">
          <button
            onClick={() => setVisiblePosts((prev) => prev + 6)}
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow-md hover:bg-yellow-600 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
