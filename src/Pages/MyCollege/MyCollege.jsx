import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const MyCollege = () => {

    const {user} = useContext(AuthContext);
    const [myCollege, setMyCollege] = useState([]);

    const url = `http://localhost:5000/admission?email=${user?.CandidateEmail}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyCollege(data))
        // .then(data => console.log(data))
    },[]);

    return (
        <div className="grid md:grid-cols-3 gap-5 rounded-xl shadow-xl mt-4 mb-8 ">

        {myCollege.map(myColleges => (
            <div key={myColleges._id}>
                <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mx-auto text-3xl font-bold text-cyan-700 mb-3">{myColleges.CandidateName}</h2>
              <p className="font-semibold italic text-xl text-cyan-700">Subject : {myColleges.subject}</p>
              <p className="font-semibold italic text-xl text-cyan-700">Contact : {myColleges.CandidatePhoneNumber}</p>
              <p className="font-semibold italic text-xl text-cyan-700">Address : {myColleges.address}</p>
              <p className="font-semibold italic text-xl text-cyan-700">Birth Date : {myColleges.DateOfBirth}</p>
            </div>
            <figure><img src={myColleges.college_image} /></figure>
          </div>
            </div>
        ))}    

            

        </div>
    );
};

export default MyCollege;