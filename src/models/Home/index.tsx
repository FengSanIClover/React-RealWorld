// export interface IHome {
//     articles: IArticle[],
//     popularTags: IPopularTag[]
// }

export interface IArticle {
    imagePath: string,
    profilePath: string,
    author: string,
    publishDate: string,
    likes: number,
    title: string,
    articlePath: string,
    content: string
}

export interface IPopularTag {
    tagPath: string,
    tagName: string
}