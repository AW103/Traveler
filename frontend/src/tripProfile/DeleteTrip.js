import React, {useState} from "react";
import postman from "../api/url";
import Button from "react-bootstrap/esm/Button";

const DeleteTrip = ({id}) => {
    const [updatedTrips, setUpdatedTrips] = useState([null]);

    const handleClick = async () => {
      let res = await postman.delete(`/deleteTrip/${id}`);
        setUpdatedTrips(res.data)
        window.location.reload(false);
    }
    console.log(updatedTrips);
    return (
        <div>
        <Button className="btn-sm" variant="outline-danger" onClick={handleClick}>Remove</Button>
        </div>
    )
}

export default DeleteTrip;