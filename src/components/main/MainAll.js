import React, { useEffect, useState } from "react";
import axios from "axios";
import MainAllMenu from "./MainAllMenu";

function MainAll() {
    const [mainAllData, setMainAllData] = useState([]);
    useEffect(() => {
        axios
            .get("/data/mainAll.json")
            .then((res) => setMainAllData(res.data))
    }, []);
    return (
        <div>
            {mainAllData.map((data) => (
                <MainAllMenu
                    key={data.id}
                    title={data.title}
                    services={data.service}
                />
            ))}
        </div>
    );
}

export default MainAll;
