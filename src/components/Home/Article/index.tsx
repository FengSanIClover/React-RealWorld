import React, { useState } from 'react';
import { IArticle } from 'models/Home';

const Article: React.SFC<IArticle> = (props) => {

    const [likes, setLikes] = useState(props.likes);

    const onLikesHandler = (likes: number) => {
        setLikes(likes += 1);
    }
    return (
        <div className="article-preview">
            <div className="article-meta">
                <a href={props.profilePath}>
                    <img src={props.imagePath} alt={props.author} />
                </a>
                <div className="info">
                    <p className="author">{props.author}</p>
                    <span className="date">{props.publishDate}</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right" onClick={() => onLikesHandler(likes)}>
                    <i className="ion-heart"></i>
                    {likes}
                </button>
            </div>
            <a href={props.articlePath} className="preview-link">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <span>Read more...</span>
            </a>
        </div>
    )
}

export default Article;