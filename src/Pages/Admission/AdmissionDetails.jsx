import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const AdmissionDetails = () => {
  const admission = useLoaderData();
  const {_id, college_name, college_image } = admission;
  const {user} = useContext(AuthContext);


  const handleAdmission = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const subject = form.subject.value;
    const date = form.date.value;
    const email = user?.email;
    const number = form.number.value;
    const address = form.address.value;

    const admit = {
        CandidateName : name,
        CandidateEmail : email,
        DateOfBirth : date,
        subject,
        address,
        college_image,
        Admission_id : _id,
        CandidatePhoneNumber : number
    }
    console.log(admit);

    fetch('https://endgame-first-project-server.vercel.app/admission', {
        method: 'POST',
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(admit)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            alert('Admission Successful')
        }
    })
  }
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-cyan-600">Admission In {college_name} !</h1>

      <form onSubmit={handleAdmission}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            defaultValue={user?.displayName}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Subject</span>
          </label>
          <input
            type="text"
            name="subject"
            placeholder="subject"
            className="input input-bordered"
          />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Email</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="email"
            defaultValue={user?.email}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Phone Number</span>
          </label>
          <input
            type="number"
            name="number"
            placeholder="number"
            className="input input-bordered"
          />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Address</span>
          </label>
          <input
            type="text"
            name="address"
            placeholder="address"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">Date</span>
          </label>
          <input
            type="date"
            name="date"
            placeholder="date of birth"
            className="input input-bordered"
          />
        </div>
        </div>
      
        <div className="form-control mt-6">
          <input className="btn btn-outline mt-3 btn-info w-1/4 font-bold mx-auto" type="submit" value="Submit" />
        </div>
      </form>

      <div className="card-body">
        
      </div>
    </div>
  );
};

export default AdmissionDetails;
