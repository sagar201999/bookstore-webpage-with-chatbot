import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Chatbot from "./chatbot";

const Search = () => {
    const [comicsList, setComicsList] = useState([]);
    const [filteredComics, setFilteredComics] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:3000/comics")
            .then(function (response) {
                setComicsList(response.data);
                setFilteredComics(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    const showChatbot = () => {
        setToggle(!toggle);

    };

    const searchChange = (e) => {
        const inputValues = e.target.value.toLowerCase();

        const update = comicsList.filter((item) => {
            const novelTitle = item.title.toLowerCase();
            const novelGenre = item.genre.toLowerCase();
            const novelAuthor = item.author.toLowerCase();
            const novelPrice = item.price;

            const combinedValues = `${novelTitle} ${novelGenre} ${novelAuthor} ${novelPrice}`;

            return combinedValues.includes(inputValues);
        });

        setFilteredComics(update);
    };


    // redirect to chatbot


    return (
        <>
            <form className="d-flex ms-5 black-perl playfair" role="search">
                <input className="form-control w-75 mt-5 mb-5 me-4" type="search" placeholder="Search" aria-label="Search" onChange={searchChange} />
                <button className="btn btn-outline-light mt-5 mb-5" type="submit">Add New Book</button>
            </form>
            <div className="d-flex flex-wrap justify-content-center black-perl playfair">
                {filteredComics.map((obj, index) => (
                    <div key={obj.id}>
                        <Link to={`/comics/${obj.id}`} className="no-undeline">
                            <div className="ms-4 border rounded comic-box mb-4">
                                <img className="img-size" src={obj.image} alt={obj.title} />
                                <h6 className="text-center LightCyan1">{obj.title}</h6>
                                <h6 className="text-center Teal-Blue">{obj.genre}</h6>
                                <h6 className="text-center text-primary">{obj.author}</h6>
                                <h6 className="text-center">{obj.rating}</h6>
                                <h5 className="text-center text-light">₹{obj.price}</h5>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <img src="images/chatlogo.png" alt='logo' className="chat-logo chat-logo2 float-end" onClick={showChatbot} />
            {toggle && <Chatbot />}
                    
        </>
    );
};

export default Search;
