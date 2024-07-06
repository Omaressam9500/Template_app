interface ISource {
    id: string | null;
    name: string;
  }
  
  interface IArticle {
    source: ISource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }
  
  interface ResponseData {
    status: string;
    totalResults: number;
    articles: IArticle[];
  }