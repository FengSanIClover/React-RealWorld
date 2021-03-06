export interface IArticle {
    title: string,
    slug: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    tagList: [],
    description: string,
    favorited: number,
    favoritesCount: number,
    author: Author
}

export interface Author {
    username: string,
    bio?: string,
    image: string,
    following: boolean
}

export interface IProps {
    articles: IArticle[],
    tags: string[],
    loading: boolean,
    getArticleList: () => void,
    getTagList: () => void,
    getArticleListByTag: (tagName: string) => void
}

export interface IState {
    tabs: string[],
    activeLink: string
}

export interface IActionState {
    tabs: string[],
    articles: IArticle[],
    tags: string[],
    loading: boolean
}