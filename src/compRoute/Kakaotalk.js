import React, {useEffect,useState} from 'react';
import { Helmet }  from 'react-helmet';
import PropTypes from 'prop-types';
import axios from 'axios';
import qs from 'qs';
import Notice from '../comp-root/Notice';
import SideMenu from '../comp-details/SideMenu';
import Detail from '../comp-details/Detail';


function Kakaotalk({ title, location }) {
    const query=qs.parse(location.search,{ignoreQueryPrefix: true})
    console.log(query)
    const [tipsData, setTipsData]=useState({
        lang: '',
        classify:'',
    });
    const [platform, setPlatform]=useState([]);
    const [content,setContent]=useState([]);
    useEffect(()=>{
        axios.get('/data/detailData.json')
        .then(res=>{
            const object=res.data.filter(c=>c.classify==='유용한 도움말')[0]
            setTipsData({
                lang: object.lang,
                classify: object.classify,
            })
            setPlatform([...platform, ...object.platform])
            setContent([...content, ...object.contents])
        });
    },[])
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Notice 
                title='홈'
                content='> 카카오톡 >'
                classify={tipsData.classify}
            />
            <div className='common-width'>   
                <SideMenu />
                <Detail tipsData={tipsData} content={content} platform={platform} />
            </div>
        </>
    );
}
Kakaotalk.propTypes={
    title: PropTypes.string.isRequired,
}

export default Kakaotalk;