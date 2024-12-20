import React, {useEffect, useState} from "react";
import axios from "axios";
import '../css/Home.css';
import { Link, useNavigate } from "react-router-dom";

function Home(){
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const idAdd ='-1';

    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        axios.get("http://localhost:3000/employees")
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className="container mt-5">
            <h2>Quang ly nhan vien voi ReactJS Axios</h2>
            <Link to={`/update/${idAdd}`} className="btn btn-primary">Them moi nhan vien +</Link>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Ho ten</td>
                        <td>Tuoi</td>
                        <td>Luong</td>
                        <td>Dia chi</td>
                        <td>Hanh dong</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d,i) => (
                            <tr>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.age}</td>
                                <td>{d.salary}</td>
                                <td>{d.address}</td>
                                <td>
                                    <Link to={`/update/${d.id}`} className="btn btn-warning">Cap nhat</Link>
                                    <button onClick={e => handleDelete(d.id)} className="btn btn-danger mx-2">Xoa</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> 
               <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-success" id="exampleModalLabel">Chi tiet nhan vien</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table className="detail table table-striped table-hover">
                                <tr>
                                    <td className="title">ID:</td>
                                    <td>{detailData.id}</td>
                                </tr>
                                <tr>
                                    <td className="title">Ho ten:</td>
                                    <td>{detailData.name}</td>
                                </tr>
                                <tr>
                                    <td className="title">Tuoi:</td>
                                    <td>{detailData.age}</td>
                                </tr>
                                <tr>
                                    <td className="title">Luong:</td>
                                    <td>{detailData.salary}</td>
                                </tr>
                                <tr>
                                    <td className="title">Dia chi:</td>
                                    <td>{detailData.address}</td>
                                </tr>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Dong</button>
                        </div>

                    </div>
               </div> 
            </div>
        </div>
    );

    function handleDelete(id) {
        const confirm = window.confirm(`Ban co thuc su muon xoa nhan vien co ma = ${id}?`);
        if(confirm){
            axios.delete("http://localhost:3000/employees/" + id)
            .then(response => {
                alert("Xoa thanh cong!");
                axios.get("http://localhost:3000/employees")
                .then(response => setData(response.data))
            })
        }
    }

}



export default Home;