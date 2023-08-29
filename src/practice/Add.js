import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {

    const [addStudentData, setAddStudentData] = useState([{
        id: '',
        name: '',
        age: '',
        class: '' 
    }]);



    const navigate = useNavigate();


    const getStudentData = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:3002/student', addStudentData)
        .then(function(responce){
            console.log(responce);
            navigate('/Table')
            
        })
        .catch(function(error){
            console.log(error);
        })


    };

    return (
        <>
            <form className="border w-25 m-auto mt-5 p-3">
                <h2>Add Student data</h2>
                <div className="form-row">
                    <div className="form-group mt-3">
                        <input type="number" className="form-control" placeholder="Student id" onChange={e => setAddStudentData({...addStudentData, id: e.target.value})} />
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" placeholder="Student Name" onChange={e => setAddStudentData({...addStudentData, name: e.target.value})} />
                    </div>
                    <div className="form-group mt-3">
                        <input type="number" className="form-control" placeholder="Student Age" onChange={e => setAddStudentData({...addStudentData, age: e.target.value})} />
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" placeholder="Student Class" onChange={e => setAddStudentData({...addStudentData, class: e.target.value})} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3 me-4" onClick={getStudentData}>Add</button>
               <Link to={'/Table'} ><button type="submit" className="btn btn-secondary mt-3">back</button></Link>
            </form>

        </>
    )
};

export default Add;