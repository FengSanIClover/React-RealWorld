import React from 'react';
import Article from 'components/Home/Article';
import PopularTag from 'components/Home/PopularTag';
import moment from 'moment';
import { IArticle, IPopularTag } from 'models/Home';

const articles: IArticle[] = [
    {
        imagePath: "http://i.imgur.com/Qr71crq.jpg",
        profilePath: "index.html",
        author: "Eric Simons",
        publishDate: moment(new Date("2020-2-28")).format("YYYY/MM/DD"),
        likes: 29,
        title: "How to build webapps that scale",
        articlePath: "index.html",
        content: "This is the description for the post."
    },
    {
        imagePath: "http://i.imgur.com/N4VcUeJ.jpg",
        profilePath: "index.html",
        author: "Albert Pai",
        publishDate: moment(new Date("2020-2-28")).format("YYYY/MM/DD"),
        likes: 32,
        title: "The song you won't ever stop singing. No matter how hard you try.",
        articlePath: "index.html",
        content: "This is the description for the post."
    }
]

const popularTags: IPopularTag[] = [
    {
        tagPath: "index.html",
        tagName: "programming"
    },
    {
        tagPath: "index.html",
        tagName: "javascript"
    },
    {
        tagPath: "index.html",
        tagName: "emberjs"
    },
    {
        tagPath: "index.html",
        tagName: "angularjs"
    },
    {
        tagPath: "index.html",
        tagName: "react"
    },
    {
        tagPath: "index.html",
        tagName: "mean"
    },
    {
        tagPath: "index.html",
        tagName: "node"
    }
]

class home extends React.Component {
    render() {

        let articlePreviews: any = <p>Now is no article</p>;
        if (articles.length > 0) {
            articlePreviews = articles.map((article, index) => {
                return <Article key={index} {...article} />
            })
        }

        let popularTagList: any = <p>No tag</p>;
        if (popularTags.length > 0) {
            popularTagList = popularTags.map((popularTag, index) => {
                return <PopularTag key={index} {...popularTag} />
            })
        }

        return (
            <div className="home-page">
                <div className="banner">
                    <div className="container">
                        <h1 className="logo-font">conduit</h1>
                        <p>A place to share your knowledge.</p>
                    </div>
                </div>
                <div className="container page">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="feed-toggle">
                                <ul className="nav nav-pills outline-active">
                                    <li className="nav-item">
                                        <a className="nav-link" href="index.html">Your Feed</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="index.html">Global Feed</a>
                                    </li>
                                </ul>
                            </div>
                            {articlePreviews}
                        </div>
                        <div className="col-md-3">
                            <div className="sidebar">
                                <p>Popular Tags</p>
                                <div className="tag-list">
                                    {popularTagList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default home;