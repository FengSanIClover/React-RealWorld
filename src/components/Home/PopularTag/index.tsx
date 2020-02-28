import React from 'react';
import { IPopularTag } from 'models/Home';

const popularTag: React.SFC<IPopularTag> = (props) => {
    return (
        <>
            <a href={props.tagPath} className="tag-pill tag-default" onClick={props.tagClickHandler}>
                {props.tagName}
            </a>
        </>
    )
}

export default popularTag;