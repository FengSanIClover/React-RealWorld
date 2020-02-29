import React, { useState } from 'react';
import moment from 'moment';
import { IArticle } from 'models/Home';

const Article: React.SFC<IArticle> = (props) => {
    const [favoritesCount, setfavoritesCount] = useState(props.favoritesCount);

    const onLikesHandler = (favoritesCount: number) => {
        setfavoritesCount(favoritesCount += 1);
    }

    const formatBody = (body: string): string => {
        if (body?.trim().length > 50) {
            const newBody = `${body.substring(0, 50)}...`;
            return newBody
        }

        return body;
    }


    return (
        <div className="article-preview">
            <div className="article-meta">
                <span>
                    <img src={props.author.image} alt={props.author.username} />
                </span>
                <div className="info">
                    <span className="author">{props.author.username}</span>
                    <span className="date">{moment(props.createdAt).format("YYYY/MM/DD")}</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right" onClick={() => onLikesHandler(favoritesCount)}>
                    <i className="ion-heart"></i>
                    {favoritesCount}
                </button>
            </div>
            <div className="preview-link">
                <h1>{props.title}</h1>
                <p>{formatBody(props.body)}</p>
                <span>Read more...</span>
            </div>
        </div>
    )
}

export default Article;