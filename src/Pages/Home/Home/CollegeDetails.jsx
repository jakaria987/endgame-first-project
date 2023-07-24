import { Link, useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  const details = useLoaderData();
  const {
    // _id,
    college_image,
    college_name,
    admission_dates,
    events,
    research_history,
    sports,
  } = details;

  return (
    <div className="card w-auto bg-cyan-100 shadow-xl mx-auto">
      <figure>
        <img
        className="w-2/4 h-2/4 mt-10 rounded-3xl"
        src={college_image}
        alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto sm:text-2xl md:text-4xl text-cyan-600 font-bold italic sm:mb-4 ">{college_name}</h2>
        <div className="grid md:grid-cols-2 gap-20 mx-auto mt-6">
        <div>
        <h1 className="text-center text-3xl text-cyan-600 font-bold sm:mb-4 ">Admission Dates</h1>
        <div className="grid md:grid-cols-2 gap-20 mx-auto h-60 bg-cyan-300 px-4 py-4 rounded-tr-3xl ">
        <div className="text-cyan-700 font-semibold text-lg">
            <p><span className="font-bold italic">Semester</span> : {admission_dates[0].semester}</p>
            <p><span className="font-bold italic">Start Date</span> : {admission_dates[0].start_date}</p>
            <p><span className="font-bold italic">End Date</span> : {admission_dates[0].end_date}</p>
        </div>
        <div className="text-cyan-700 font-semibold text-lg">
            <p><span className="font-bold italic">Semester</span> : {admission_dates[1].semester}</p>
            <p><span className="font-bold italic">Start Date</span> : {admission_dates[1].start_date}</p>
            <p><span className="font-bold italic">End Date</span> : {admission_dates[1].end_date}</p>
        </div>
        </div>
        </div>
        <div>
        <h1 className="text-center text-3xl text-cyan-600 font-bold sm:mb-4 ">Events</h1>
        <div className="grid md:grid-cols-2 gap-16 mx-auto h-60 bg-cyan-300 px-4 py-4 rounded-tr-3xl ">
        <div className="text-cyan-700 font-semibold text-lg">
            <p><span className="font-bold italic">Event Name</span> : {events[0].event_name}</p>
            <p><span className="font-bold italic">Date</span> : {events[0].date}</p>
            <p><span className="font-bold italic">Location</span> : {events[0].location}</p>
        </div>
        <div className="text-cyan-700 font-semibold text-lg">
            <p><span className="font-bold italic">Event Name</span> : {events[1].event_name}</p>
            <p><span className="font-bold italic">Date</span> : {events[1].date}</p>
            <p><span className="font-bold italic">Location</span> : {events[1].location}</p>
        </div>
        </div>
        </div>
        </div>
        

        <div className="grid md:grid-cols-2 gap-20 mx-auto mt-11">
        <div>
        <h1 className="text-center text-3xl text-cyan-600 font-bold sm:mb-4 ">Research History</h1>
        <div className="grid md:grid-cols-2 gap-12 mx-auto h-60 bg-cyan-300 px-4 py-4 rounded-tr-3xl">
        <div className="text-cyan-700 font-semibold text-lg">
            <p><span className="font-bold italic">Year</span> : {research_history[0].year}</p>
            <p><span className="font-bold italic">Description</span> : {research_history[0].description}</p>
        </div>
        <div className="text-cyan-700 font-semibold text-lg">
            <p><span className="font-bold italic">Year</span> : {research_history[1].year}</p>
            <p><span className="font-bold italic">Description</span> : {research_history[1].description}</p>
        </div>
        </div>
        </div>
        
        <div>
        <h1 className="text-center text-3xl text-cyan-600 font-bold sm:mb-4 ">Sports</h1>
        <div className="grid md:grid-cols-2 gap-20 mx-auto h-60 bg-cyan-300 px-4 py-4 rounded-tr-3xl">
        <div className="text-cyan-700 font-semibold text-lg">
            <p><span className="font-bold italic">Sport Name</span> : {sports[0].sport_name}</p>
            <p><span className="font-bold italic">Coach</span> : {sports[0].coach}</p>
            <p><span className="font-bold italic">Practice Schedule</span> : {sports[0].practice_schedule}</p>
        </div>
        <div className="text-cyan-700 font-semibold text-lg">
            <p><span className="font-bold italic">Sport Name</span> : {sports[1].sport_name}</p>
            <p><span className="font-bold italic">Coach</span> : {sports[1].coach}</p>
            <p><span className="font-bold italic">Practice Schedule</span> : {sports[1].practice_schedule}</p>
        </div>
        </div>
        </div>
        </div>
        <Link to='/' className="btn hover:btn-info w-1/6 font-extrabold mx-auto mt-6">Go Back</Link>
      </div>
    </div>
  );
};

export default CollegeDetails;
