import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// const ContentIndex = styled.div`
//     color: orange;
// `;

function RandomPick() {
    const [random, setRandom] = useState([]);
    useEffect(() => {
        axios.get("/data/faqMain.json").then((res) => {
            const { article } = res.data;
            let arr = [];
            for (let i = 0; i < 10; i++) {
                const service = Math.floor(Math.random() * article.length);
                const category = Math.floor(
                    Math.random() * article[service].length
                );
                const platform = Math.floor(
                    Math.random() * article[service][category].length
                );
                const articleId = Math.floor(
                    Math.random() * article[service][category][platform].length
                );
                const temp = {
                    service,
                    category,
                    platform,
                    articleId,
                    ...article[service][category][platform][articleId],
                };
                arr = [...arr, temp];
            }
            setRandom([...random, ...arr]);
        });
    }, []);

    return (
        <div className="detail">
            <div className="categoryName">유용한 도움말</div>
            <div className="contentBox">
                {random.map((data, index) => (
                    <div className="content" key={data.content}>
                        <div className="contentIndex">
                            {index + 1}
                        </div>
                        <div className="contentLink">
                            <Link
                                to={`?service=${data.service}&category=${data.category}&platform=${data.platform}&articleId=${data.id}`}
                            >
                                {data.content}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RandomPick;
