import React from 'react';

function Preview({ toggleList, setToggleList, toggleData, setToggleData }) {
    return (
        <div className='previewComponent'>
            <div>
                {toggleData.title}
            </div>
            <div>
                {toggleData.content}
            </div>
        </div>
    );
}

export default Preview;