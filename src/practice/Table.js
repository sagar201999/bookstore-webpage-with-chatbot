import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Table = () => {

    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3002/student')
            .then(function (responce) {
                setStudentData(responce.data);
            })
            .catch(function (error) {
                console.log(error);
            })

    }, []);


    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete');
        if (confirm) {
            axios.delete('http://localhost:3002/student/' + id)
                .then(function (responce) {
                    setStudentData(prevData => prevData.filter(obj => obj.id !== id));
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    return (
        <>
            <table className="text-dark table-bordered border w-50 table-hover mt-5 text-center m-auto">
                <thead className="w-50">
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">className</th>
                        <div className="mb-2 w-50">
                            <Link to={'/Add'}><button type="button" className="btn me-3 mt-2 btn-success"  >Add</button></Link>
                        </div>
                    </tr>
                </thead>
                <tbody>
                    {studentData.map((obj, index) => (
                        <tr key={index}>
                            <th scope="row">{obj.id}</th>
                            <td>{obj.name}</td>
                            <td>{obj.age}</td>
                            <td>{obj.class}</td>
                            <div className="mb-2 mt-2 w-75">
                                <Link to={`/Read/${obj.id}`}><button className="btn btn-info me-3">Read</button></Link>
                                <Link to={'/Update'}><button type="button" className="btn me-3 btn-primary">update</button></Link>
                                <button type="button" className="btn btn-danger" onClick={e => handleDelete(obj.id)}>delete</button>
                            </div>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
};

export default Table;