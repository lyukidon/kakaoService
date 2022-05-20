import React from 'react';

function ArticleStatics({ statistic }) {
    return (
        <div className='statistic'>
            <h4>도움말 통계 ( 도움말 목록 설정 기준 )</h4>
            <ul>
                <li>서비스 갯수: {statistic && statistic.service}</li>
                <li>카테고리 갯수: {statistic && statistic.category}</li>
                <li>OS 갯수: {statistic && statistic.platform}</li>
                <li>도움말 갯수: {statistic && statistic.article}</li>
            </ul>
        </div>
    );
}

export default ArticleStatics;