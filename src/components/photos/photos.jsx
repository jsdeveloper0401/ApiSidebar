import React, { useEffect, useState } from "react";
import axios from "axios";
import "./photos.css";

const Photos = () => {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/photos?_limit=12")
            .then((response) => {
                console.log(response.data[0]);
                setPhoto(response.data);
            });
    }, []);

    let cards = photo?.map((el) => (
        <div key={el.id} className="col-md-4 mb-4">
            <div className="foto card h-100">
                <img
                    src={el.thumbnailUrl}
                    className="card-img-top"
                    alt={el.title}
                />
                <div className="card-body">
                    <h5 className="card-title">{el.title}</h5>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="text-center">Photos</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">{cards}</div>
                        </div>
                        <div className="card-footer"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photos;
