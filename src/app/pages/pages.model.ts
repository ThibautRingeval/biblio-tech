export interface Page {
    id: number;
    title: string;
    content: string;
    bookId: number;
    categories:Category[];
    createdAt:Datetime;
    updatedAt:Datetime;
  }
