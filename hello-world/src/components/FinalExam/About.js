import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom";


export default function About() {

    const [seafood, setData] = useState([]);
    //const navigate = useNavigate();
    const idAdd = '-1';
    const [detailData, setDetailData] = useState({});

    useEffect = (() => {
        axios.get("http://localhost:3000/seafood")
            .then(res => {
                setData(res.seafood)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="container mt-5">
            <h2>Manage seafood</h2>
            <Link to={`/update/${idAdd}`} className="btn btn-primary">
                Thêm mới seafood
            </Link>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">productName</th>
                        <th scope="col">price</th>
                        <th scope="col">description</th>
                        <th scope="col">img</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {seafood.map((d,i) => (
                        <tr>
                        <td>{d.id}</td>
                        <td>{d.productName}</td>
                        <td>{d.price}</td>
                        <td>{d.description}</td>
                        <td><img src={d.imgUrl}  width="500" height="600"/></td>
                        <td></td>
                      </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}