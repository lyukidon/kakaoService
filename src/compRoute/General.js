import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios'
import PropTypes from 'prop-types';
import Notice from '../comp-root/Notice';
import SideMenu from '../comp-details/SideMenu';
import Detail from '../comp-details/Detail';

function General({ title }) {
    const [tipsData, setTipsData]=useState({
        lang: '',
        classify:'',
    });
    const [platform, setPlatform]=useState([]);
    const [content,setContent]=useState([]);
    useEffect(()=>{
        axios.get('/data/detailData.json')
        .then(res=>{
            const object=res.data.filter(c=>c.classify==='일반')[0]
            setTipsData({
                lang: object.lang,
                classify: object.classify,
            })
            setPlatform([...platform, ...object.platform]);
            setContent([...content, ...object.contents]);
        });
    },[])
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Notice title='홈' content='> 카카오톡 >' classify={tipsData.classify} />
            <div className='common-width'>   
                <SideMenu />
                <Detail tipsData={tipsData} content={content} platform={platform}/>
            </div>
        </>
    );
}
General.propTypes = {
    title: PropTypes.string.isRequired
};

export default General;