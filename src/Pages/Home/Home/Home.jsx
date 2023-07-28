import { useEffect, useState } from "react";
import "./Home.css";
import Colleges from "./Colleges";
import Gallery from "./Gallery";
import ResearchPapers from "./ResearchPapers";
import Review from "./Review";

const Home = () => {

  const reviews = [
    {
      collegeName: "Harvard University",
      reviewer: "John Doe",
      content: "Harvard University has an amazing campus and great faculty!",
    },
    {
      collegeName: "Columbia University",
      reviewer: "Jane Smith",
      content: "I had an excellent learning experience at Columbia University.",
    },
    {
      collegeName: "New York University",
      reviewer: "Md Jakaria",
      content: "New York University has an amazing campus!",
    },
    {
      collegeName: "Columbia University",
      reviewer: "Nusrat Jahan",
      content: "I had an great experience at Columbia University.",
    },
  ];

  
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allColleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);


  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {colleges.map((college) => (
          <Colleges key={college._id} college={college}></Colleges>
        ))}
      </div>

      <div className="pb-10 pt-4">
      <Gallery></Gallery>
      </div>

      <div className="mb-8 ">
        <ResearchPapers></ResearchPapers>
      </div>

      <div className="card w-auto bg-cyan-100 shadow-xl mx-auto pt-10 ">
      <h2 className="text-center sm:text-2xl sm:mb-7 md:text-4xl text-cyan-600 font-bold italic">Welcome to Our College Reviews</h2>
      <div className="review-section">
        {reviews.map((review, index) => (
          <Review 
            key={index}
            collegeName={review.collegeName}
            reviewer={review.reviewer}
            content={review.content}
          />
        ))}
      </div>
    </div>

    </div>
  );
};

export default Home;
