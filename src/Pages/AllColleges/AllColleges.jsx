import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllColleges = () => {
  const [allColleges, setAllColleges] = useState([]);
  useEffect(() => {
    fetch("https://endgame-first-project-server.vercel.app/allColleges")
      .then((res) => res.json())
      .then((data) => setAllColleges(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {allColleges.map(allCollege => (
        <div key={allCollege._id}>
          <div className="card w-96 bg-gradient-to-r from-cyan-900 to-blue-900 shadow-xl image-full sm:mx-auto">
            <figure className="h-64 w-96">
              <img src={allCollege.college_image} alt="" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title mx-auto font-bold text-3xl text-cyan-300">
                {allCollege.college_name}
              </h2>

              <h1 className="text-center text-2xl text-cyan-100 font-bold mt-6">
                Admission Dates
              </h1>
              <div className="grid md:grid-cols-2 gap-4 text-cyan-100 ">
                <div className="text-cyan-100 font-semibold text-md">
                  <p>
                    <span className="font-bold italic">Semester</span> :{" "}
                    {allCollege.admission_dates[0].semester}
                  </p>
                  <p>
                    <span className="font-bold italic">Start Date</span> :{" "}
                    {allCollege.admission_dates[0].start_date}
                  </p>
                  <p>
                    <span className="font-bold italic">End Date</span> :{" "}
                    {allCollege.admission_dates[0].end_date}
                  </p>
                </div>
                <div className="text-cyan-100 font-semibold text-md">
                  <p>
                    <span className="font-bold italic">Semester</span> :{" "}
                    {allCollege.admission_dates[1].semester}
                  </p>
                  <p>
                    <span className="font-bold italic">Start Date</span> :{" "}
                    {allCollege.admission_dates[1].start_date}
                  </p>
                  <p>
                    <span className="font-bold italic">End Date</span> :{" "}
                    {allCollege.admission_dates[1].end_date}
                  </p>
                </div>
              </div>
              <h3 className="text-lg text-center font-bold text-cyan-100 mt-4 italic">
                Total Number of research : {allCollege.research_history.length}
              </h3>
              <p className="text-lg text-center font-bold text-cyan-100 italic">
                College Rating : {allCollege.rating}
              </p>

              <div className="card-actions justify-center">
                <Link to={`/allCollegeDetails/${allCollege._id}`}>
                  <button className="btn btn-outline btn-accent btn-md mt-5">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllColleges;
