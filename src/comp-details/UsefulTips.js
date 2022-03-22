import React, { useEffect, useState } from 'react';
import Detail from './Detail';

function UsefulTips({useful}) {
    return (
        <div>
            <Detail
                tipsData={{classify: '유용한 도움말'}}
                content={[useful]}
            />
        </div>
    )
}

export default UsefulTips;