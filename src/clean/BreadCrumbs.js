import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function BreadCrumbs({ query, service, category}) {
    return (
        <div>
            {console.log(query)}
            title: {service[query.service]}
            {category[query.service].map((c,i)=>(
                <div>
                    <Link to={`?service=${query.service}&category=${i}`}>
                        {c}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BreadCrumbs;