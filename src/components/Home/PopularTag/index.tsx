import React from 'react';

const popularTag: React.SFC<{ tagName: string, tagClickHandler: any }> = ({ tagName, tagClickHandler }) => {
    return (
        <>
            <a href="index.html" className="tag-pill tag-default" onClick={tagClickHandler} >
                {tagName}
            </a>
        </>
    )
}

export default popularTag;