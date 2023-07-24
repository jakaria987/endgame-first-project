import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const MyCollege = () => {

    const {user} = useContext(AuthContext);
    const [myCollege, setMyCollege] = useState([]);

    const url = `https://endgame-first-project-server.vercel.app/Admissions?email=${user.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div>
            <h1>my college : {myCollege.length}</h1>
        </div>
    );
};

export default MyCollege;