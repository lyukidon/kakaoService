import React,{useEffect,useState} from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Notice from '../comp-root/Notice';
import SideMenu from '../comp-details/SideMenu';
import Detail from '../comp-details/Detail';

function General({ title }) {
    const [tipsData, setTipsData]=useState({
        lang:'',
        classify:'일반',
    })
    const [content, setContent]=useState([
        {
            "id": 1,
            "content": "아이폰에서 실행 중에만 카카오톡 알림이 울려요"
          },
          {
            "id": 2,
            "content": "대화를 백업하고 복원하려면 어떻게 해야 하나요?"
          },
          {
            "id": 3,
            "content": "카카오톡 암호를 분실했어요. 어떻게 하나요?"
          },
          {
            "id": 4,
            "content": "스마트폰이 없는데 카카오톡 PC를 이용할 수 있나요?"
          },
          {
            "id": 5,
            "content": "안드로이드 사용자 테마가 안보여요"
          },
          {
            "id": 6,
            "content": "[태블릿] 안드로이드 태블릿 카카오톡을 사용할 수 있는 기기를 알고 싶습니다."
          },
          {
            "id": 7,
            "content": "[Wear OS] Wear OS에서 카카오톡을 이용하고 싶어요"
          },
          {
            "id": 8,
            "content": "OS 서체를 설정(혹은 설치)하고 싶어요."
          },
          {
            "id": 9,
            "content": "오픈채팅 이용제한이 적용되는 사유는 어떤 것이 있나요?"
          },
          {
            "id": 10,
            "content": "어떤 방법으로 저를 사칭하여 금전을 요구한건가요? 개인정보가 유출된건가요?"
          }

    ])
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Notice title='홈' content=' > 카카오톡 > 일반' />
            <div className='common-width'>   
                <SideMenu />
                <Detail tipsData={tipsData} content={content}/>
            </div>

        </>
    );
}
General.propTypes = {
    title: PropTypes.string.isRequired
};

export default General;