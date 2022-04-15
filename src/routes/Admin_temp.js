import React from "react";
import { useParams } from "react-router-dom";

function Admin() {
    const params = useParams();
    return (
        <div>
            <div contentEditable={true}></div>
        </div>
    );
}

export default Admin;
