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

export interface IState {
    tabs: string[],
    articles: IArticle[],
    tags: string[]
}