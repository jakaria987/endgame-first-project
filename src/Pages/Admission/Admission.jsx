import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Admission = () => {

    const [collegeNames, setCollegeNames] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allColleges")
      .then((res) => res.json())
      .then((data) => setCollegeNames(data));
  }, []);

    return (
        <div className="my-10">
            <h1 className="text-2xl text-center text-cyan-600 font-semibold mb-6 underline underline-offset-8 decoration-wavy">In Which College Are You Interested To Admit?</h1>
            {collegeNames.map((names, index) => 
                <h1 key={names._id} className="text-2xl font-semibold text-cyan-600 text-center vertical py-2">{index + 1}. {names.college_name}
                <Link to={`/admission/${names._id}`}>
                <button className="font-bold ml-2"><FaArrowRight className="inline-flex"></FaArrowRight></button>
                </Link>
                </h1>
            )}
        </div>
    );
};

export default Admission;