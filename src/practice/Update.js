import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../pages/apicontext";

const Update = () => {

    const { id } = useParams();
    const navigate = useNavigate();


    const [addStudentData, setAddStudentData] = useState([]);


    const updateStudentData = (e) => {
        e.preventDefault();
        axios
            .put('http://localhost:3002/student/' + id, addStudentData)
            .then(function (responce) {
                console.log(responce);
                navigate('/')

            })
            .catch(function (error) {
                console.log(error);
            });

    };

    const getAppContextData = useContext(AppContext)

    return (
        <>
            <form className="border w-25 m-auto mt-5 p-3">
                <h2>update Student data</h2>
                <div className="form-row">
                    <div className="form-group mt-3">
                        <input type="number" className="form-control" placeholder="Student id" value={addStudentData.id} />
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" placeholder="Student Name" value={addStudentData.name} />
                    </div>
                    <div className="form-group mt-3">
                        <input type="number" className="form-control" placeholder="Student Age" value={addStudentData.age} />
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" placeholder="Student Class" value={addStudentData.class} />
                    </div>
                </div>

                <button type="button" className="btn btn-primary mt-3 me-4" onClick={updateStudentData}>update</button>
                <Link to={'/Table'} ><button type="submit" className="btn btn-secondary mt-3">back</button></Link>
            </form>

            <div>
            <h1>data from apicontext :</h1>
            <h1>{getAppContextData}</h1>
            </div>


     

        </>
    )
}

export default Update;