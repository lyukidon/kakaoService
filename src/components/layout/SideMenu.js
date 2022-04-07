import React, { useEffect, useState } from "react";
import qs from "qs";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function SideMenu() {
    const query = qs.parse(useLocation().search, { ignoreQueryPrefix: true });
    const [service, setService] = useState("");
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get("/data/faq.json").then((res) => {
            setService(res.data.service[query.service]);
            setCategory([...res.data.category[query.service]]);
        });
    }, []);

    return (
        <div className="sidemenu inlineBlock">
            <div className="serviceName">
                <h3>{service}</h3>
            </div>
            {category.map((data, index) => (
                <div key={data} className="sidebtn">
                    <Link
                        key={data}
                        className={index === +query.category && "btnActive"}
                        to={`/faq?service=${query.service}&category=${index}&platform=0`}
                    >
                        {data}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default SideMenu;
