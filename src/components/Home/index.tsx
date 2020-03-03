import React from 'react';
import Article from 'components/Home/Article';
import PopularTag from 'components/Home/PopularTag';
import _ from 'lodash';
import { IState, IProps, IArticle } from 'models/Home';
// import {homeActionType} from 'redux-setting/store/actions/Home';
import * as actions from 'redux-setting/store/actions/Home';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { reducerType } from 'redux-setting/store/reducers';
import { bindActionCreators } from 'redux';


class home extends React.Component<IProps, IState> {

    state: IState = {
        tabs: ["Your Feed", "Global Feed"]
    }

    componentDidMount() {
        this.props.getArticleList();
        this.props.getTagList();
    }

    render() {
        let articlePreviews;
        if (this.props.loading) {
            articlePreviews = <p>load article</p>;
        } else {
            articlePreviews = <p>No article</p>;
            if (this.props.articles.length > 0) {
                articlePreviews = this.props.articles.map((article, index) => {
                    return <Article key={index} {...article} />
                })
            }
        }

        let popularTagList: any = <p>No tag</p>;
        if (this.props.tags.length > 0) {
            popularTagList = this.props.tags.map((tag: string, index) => {
                return <PopularTag key={index} tagName={tag} tagClickHandler={(e: React.MouseEvent<HTMLAnchorElement>) => tagClickHandler(e, tag)} />
            })
        }

        let tabList: any = <p>No Tab</p>;
        if (this.state.tabs.length > 0) {
            tabList = this.state.tabs.map((tab, index) => {
                return (
                    <li key={index} className="nav-item">
                        <a className="nav-link" href={"index.html"} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()} >{tab}</a>
                    </li>
                )
            })
        }

        const tagClickHandler = (event: React.MouseEvent<HTMLAnchorElement>, tag: string) => {
            event.preventDefault();

            if (this.state.tabs.findIndex(tab => _.isEqual(tab, tag)) === -1) {
                const newTabs: string[] = [...this.state.tabs];
                newTabs.splice(2, 1, tag);
                this.setState({ tabs: newTabs })
            }

            this.props.getArticleListByTag(tag);
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

interface LinkStateToProps {
    articles: IArticle[],
    tags: string[],
    loading: boolean
}

interface LinkDispatchToProps {
    getArticleList: () => void,
    getTagList: () => void,
    getArticleListByTag: (tagName: string) => void
}

const mapStateToProps = (state: reducerType): LinkStateToProps => {
    return {
        articles: state.home.articles,
        tags: state.home.tags,
        loading: state.home.loading
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, actions.homeActionType>): LinkDispatchToProps => {
    return {
        getArticleList: () => dispatch(actions.GetArticleList()),
        getTagList: bindActionCreators(actions.GetTagList, dispatch),
        getArticleListByTag: bindActionCreators(actions.GetArticleListByTag, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);