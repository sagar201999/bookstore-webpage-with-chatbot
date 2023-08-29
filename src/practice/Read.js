import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";



const Read = () => {
    const [studentData, setStudentData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get('http://localhost:3002/student/ ' + id)
            .then(function (responce) {
                setStudentData(responce.data);

                console.log(responce.data);
            })
            .catch(function (error) {
                console.log(error);
            })

    }, []);


    return (
        <>
            <div className="text-dark">
                <h1>{studentData.id}</h1>
                <h1>{studentData.name}</h1>
                <h1>{studentData.age}</h1>
                <h1>{studentData.class}</h1>
            </div>
        </>
    )
}

export default Read;