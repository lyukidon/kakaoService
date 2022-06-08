import axios from "axios";
import React, { useEffect } from "react";

function ArticleStatics({ faqData, statistic }) {
    return (
        <div className="statistic">
            <h4>도움말 통계</h4>
            <div>
                <div>
                    전체
                    {faqData && (
                        <ul>
                            <li>서비스 갯수: {faqData.service.length}</li>
                            <li>카테고리 갯수: {faqData.category.length}</li>
                            <li>OS 갯수: {faqData.platform.length}</li>
                            <li>도움말 갯수: {faqData.article.length}</li>
                        </ul>
                    )}
                </div>
                <div>
                    현재 설정 기준
                    <ul>
                        <li>서비스 갯수: {statistic && statistic.service}</li>
                        <li>
                            카테고리 갯수: {statistic && statistic.category}
                        </li>
                        <li>OS 갯수: {statistic && statistic.platform}</li>
                        <li>도움말 갯수: {statistic && statistic.article}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ArticleStatics;
