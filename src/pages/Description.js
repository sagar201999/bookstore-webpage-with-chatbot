import React from "react";
import '../App.css';
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Description = () => {

    const { comicId } = useParams();
    const [comic, setComic] = useState();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/comics/${comicId}`)
            .then((response) => response.data)
            .then((data) => setComic(data))
            .catch((error) => console.log(error));
    }, [comicId]);



    if (!comic) {
        return <div>Loading...</div>;
    }

    return (
        <>

            <div className="playfair">
                <div className="d-flex flex-wrap justify-content-center mt-4">
                    <div className="">
                        <img className="des-img border p-2 rounded" src={comic.image} alt={comic.title} />
                    </div>
                    <div className="ms-2 border rounded p-3">
                        <h1 className="LightCyan1">{comic.title}</h1>
                        <h6 className="text-light">by</h6>
                        <div className="d-flex">
                            <h5 className="text-primary">{comic.author} / </h5>
                            <h5 className="text-primary">&nbsp;{comic.publisher}</h5>
                        </div>
                        <h5 className="Teal-Blue">{comic.genre}</h5>
                        <h5 className="LightCyan1">{comic.series}</h5>
                        <h5>{comic.rating}</h5>
                        <h5 className="text-info">{comic.pages}</h5>
                        <hr className="text-light" />
                        <h1 className="LightCyan1"><span className="">₹</span> {comic.price}</h1>
                        <div className="d-flex mt-3">
                            <button className="btn btn-outline-primary me-4">Add to Cart</button>
                            <button className="btn btn-danger px-4">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="border rounded mt-2 p-4">
                    <h5 className="text-danger">About Book - </h5>
                    <h6 className="text-light">{comic.description}</h6>
                </div>

            </div>

        </>
    )

}

export default Description;