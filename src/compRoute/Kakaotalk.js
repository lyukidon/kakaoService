import React, { useEffect } from 'react';
import Option from '../comp-root/Option'
import Header from '../comp-root/Header'
import Notice from '../comp-root/Notice'

function Kakaotalk() {
    useEffect(()=>{
        import('../comp-root/Option').then({default:Option})
    },[])
    return (
        <div>
            <Option />
            <Header />
            <Notice />
        </div>
    );
}

export default Kakaotalk;