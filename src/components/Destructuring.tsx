interface DestructuringProps {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
  //usying enum as a prop
  category: Category;
}
//creating enum
export enum Category {
  JS = "javascript",
  TS = "typescript",
  P = "python",
}

export function Destructuring({
  title,
  content,
  commentsQty,
  tags,
  category,
}: DestructuringProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <span>{commentsQty}</span>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
      <span>Category: {category}</span>
    </div>
  );
}
