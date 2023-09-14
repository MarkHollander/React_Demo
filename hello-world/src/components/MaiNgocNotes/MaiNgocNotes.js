import "./MaiNgocNotes.css";

import React ,{ useState } from "react";


function MaiNgocNotes() {

    const [title, setTitle] = useState("");

    const [des, setDes] = useState("");

    const [notes, setNotes] = useState(data);

    const [count, setCount] = useState(4);

    function remove(id) {

        setNotes(notes.filter((e) => e.key !== id));
    }

    function handle() {

        if (!title || !des) {

            window.alert("Incomplete input");

            return;
        }


        setNotes([

            ...notes,

            { key: count, title: title, des: des },
        ]);

        setCount(count + 1);

        setTitle("");

        setDes("");

        console.log(notes);
    }

    return (
        <div className="App">
            <div className="card">
                <div className="head">
                    <h1>Menu seafood notes</h1>
                </div>
                <div className="notes">
                    {notes.map((e) => (
                        <div className="notes-item">
                            <div style={{ width: "90%" }}>

                                <h4> Tên: {e.title}</h4>
                                <p>Giá: {e.des}</p>
                            </div>
                            <button
                                type="input"
                                style={{
                                    fontSize: "20px",
                                    width: "8%",
                                    height: "35px",
                                    padding: "0 2% 0 2%",
                                    color: "black"

                                }}

                                onClick={() =>
                                    remove(e.key)
                                }>
                                X
                            </button>
                        </div>

                    ))}

                    <div className="add">
                        <h3>Thêm món</h3>
                        <input
                            type="text"
                            id="title"
                            placeholder="Tên"
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)
                            }>

                        </input>
                        <input
                            type="text"
                            id="description"
                            placeholder="Nhap mô tả - gia"
                            value={des}
                            onChange={(e) => {
                                setDes(e.target.value);
                            }}>

                        </input>
                        <button type="submit" onClick={handle}>

                            Thêm mới
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

const data = [

    {

        key: 0,

        title: "Mai Ngoc",

        des: "settle - Texas - 4690 USD"

    },

    { key: 1, title: "Tiéu Vy", des: "Miami - Los Angeles - 5000 USD" },
    {

        key: 2,

        title: "pang Thu Thao",

        des: "Berlin - Paris - 4500 Euro"
    },

    {

        key: 4,

        title: "Tom hum bd 16 phomai",

        des: "Nha Trang - Quy Nhon - 4560 K",

    },
    {

        key: 5,

        title: "Cua hoang dé Alaska s6t BBQ",
        des: "Da Ning - Ving Tau - 12500 K",
    }

]

export default MaiNgocNotes;