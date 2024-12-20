import React, {useEffect, useState} from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import '../css/AddUpdate.css';

//Ham them moi hoac cap nhat nhan vien
function AddUpdate(){
    const {id} = useParams();
    const [inputData, setInputData] = useState({
        name: '',
        age: '',
        address: '',
        salary: '',
    });
    const navigate = useNavigate();
    useEffect(() => {
        if(id !== '-1'){
            axios.get("http://localhost:3000/employees/" + id)
            .then(response => setInputData(response.data))
            .catch(error => console.log(error))
        }
    },[]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(id !== '-1'){
            axios.put("http://localhost:3000/employees/" + id, inputData)
            .then(response => {
                alert("Cap nhat thanh cong!");
                navigate('/');
            })
        }else{
            axios.post('http://localhost:3000/employees', inputData)
            .then(response => {
                alert("Them moi thanh cong!");
                navigate('/');
            })
        }
    }

    return(
        <div className="d-flex justify-content-center">
            <div className="form-add container m-5 p-5 w-50">
                <h2>{id === '-1' ? 'Them moi' : 'Cap nhat'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Ho ten:</label>
                        <input name="name" type="text" className="form-control" aria-aria-describedby="nameHelp" 
                        value={inputData.name} onChange={e => setInputData({...inputData, name: e.target.value})} ></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Tuoi:</label>
                        <input name="age" type="text" className="form-control" aria-aria-describedby="ageHelp" 
                        value={inputData.age} onChange={e => setInputData({...inputData, age: e.target.value})} ></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="salary" className="form-label">Luong:</label>
                        <input name="salary" type="text" className="form-control" aria-aria-describedby="salaryHelp" 
                        value={inputData.salary} onChange={e => setInputData({...inputData, salary: e.target.value})} ></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Dia chi:</label>
                        <input name="address" type="text" className="form-control" aria-aria-describedby="addressHelp" 
                        value={inputData.address} onChange={e => setInputData({...inputData, address: e.target.value})} ></input>
                    </div>
                    <button type="submit" className="btn btn-primary me-3">Submit</button>
                    <Link to='/' type="reset" className="btn btn-warning">Cancel</Link>
                </form>
            </div>
        </div>
    );
}

export default AddUpdate;