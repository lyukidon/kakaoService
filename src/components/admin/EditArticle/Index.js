import React from "react";
import Article from "../Article";

function Index({ faqData }) {
    return (
        <div>
            <Article faqData={faqData} />
        </div>
    );
}

export default Index;
