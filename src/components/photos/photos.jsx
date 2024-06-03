import React, { useEffect, useState } from "react";
import axios from "axios";
import Rolling from "@img/rolling.svg";
import "./photos.css";

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/photos?_limit=12")
            .then((response) => {
                setPhotos(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <h3 style={{ textAlign: "center", marginTop: "20px" }}>
                <img src={Rolling} alt="Loading..." />
            </h3>
        );
    }

    let cards = photos?.map((el) => (
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
