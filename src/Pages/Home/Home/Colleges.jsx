import { Link } from "react-router-dom";


const Colleges = ({college}) => {
    const {_id, college_image, college_name} = college;
    return (
        <div key={_id} className=''>
                <div className="card w-96 bg-gradient-to-r from-cyan-700 to-blue-700 shadow-xl image-full sm:mx-auto">
                <figure className='h-52 w-96'><img  src={college_image} alt="" /></figure>
                <div className="card-body ">
                    <h2 className="card-title mx-auto mt-8 font-bold text-3xl text-cyan-300">{college_name}</h2>
                    <div className="card-actions justify-center">
                    <Link to={`/collegeDetails/${_id}`}>
                    <button className="btn btn-outline btn-accent btn-md mt-5">Details</button>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
    );
};

export default Colleges;