import React, {useEffect,useState} from 'react';
import { Helmet }  from 'react-helmet';
import PropTypes from 'prop-types';
import axios from 'axios';
import Notice from '../comp-root/Notice';
import SideMenu from '../comp-details/SideMenu';
import Detail from '../comp-details/Detail';


function Kakaotalk({ title }) {
    const [tipsData, setTipsData]=useState({
        lang: '',
        classify:'',
    });
    const [content,setContent]=useState([]);
    useEffect(()=>{
        axios.get('/data/kakaotalkUsefulTips.json')
            .then(res=>{
                const {lang, classify, contentData}=res.data
                setTipsData({
                    lang: lang,
                    classify: classify,
                })
                setContent([...content, ...contentData])
                console.log('테스트', content)
            });
    },[])
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Notice 
                title='홈'
                content=' > 카카오톡 > 유용한 도움말'
            />
            <div className='common-width'>   
                <SideMenu />
                <Detail tipsData={tipsData}/>
            </div>
        </>
    );
}
Kakaotalk.propTypes={
    title: PropTypes.string.isRequired,
}

export default Kakaotalk;