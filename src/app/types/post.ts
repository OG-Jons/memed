export type Post = {
  id?: string;
  title: string;
  image: string;

  createdAt: number;
  createdAtDate: Date;

  creator?: {
    id: string;
    username: string;
    name: string;
  };
}
