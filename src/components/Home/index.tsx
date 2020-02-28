import React from 'react';
import Article from 'components/Home/Article';
import PopularTag from 'components/Home/PopularTag';
import moment from 'moment';
import _ from 'lodash';
import { IArticle, IPopularTag, IState } from 'models/Home';

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

class home extends React.Component<any, IState> {

    state: IState = {
        tabs: [
            {
                tagPath: "index.html",
                tagName: "Your Feed",
            },
            {
                tagPath: "index.html",
                tagName: "Global Feed"
            }
        ]
    }

    render() {

        let articlePreviews: any = <p>No article</p>;
        if (articles.length > 0) {
            articlePreviews = articles.map((article, index) => {
                return <Article key={index} {...article} />
            })
        }

        let popularTagList: any = <p>No tag</p>;
        if (popularTags.length > 0) {
            popularTagList = popularTags.map((popularTag, index) => {
                return <PopularTag key={index} {...popularTag} tagClickHandler={(e: React.MouseEvent<HTMLAnchorElement>) => tagClickHandler(e, popularTag)} />
            })
        }

        let tabList: any = <p>No Tab</p>;
        if (this.state.tabs.length > 0) {
            tabList = this.state.tabs.map((tab, index) => {
                return (
                    <li key={index} className="nav-item">
                        <a className="nav-link" href={tab.tagPath} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()} >{tab.tagName}</a>
                    </li>
                )
            })
        }

        const tagClickHandler = (event: React.MouseEvent<HTMLAnchorElement>, popularTag: IPopularTag) => {
            event.preventDefault();

            if (this.state.tabs.findIndex(tab => _.isMatch(tab, popularTag)) === -1) {
                const newTabs: IPopularTag[] = [...this.state.tabs];
                newTabs.push(popularTag);
                this.setState({ tabs: newTabs })
            }
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
                                    {tabList}
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