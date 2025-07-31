import { FC, Key } from "react";
import {
  DirectoryItemContainer,
  DirectoryItemBody,
  BackgroundImage,
} from "./directory-item.styles";

type Category = {
  id: Key;
  title: string;
  imageUrl: string;
};

type DirectoryItemProps = {
  category: Category;
};

const DirectoryItem: FC<DirectoryItemProps> = (props) => {
  const { title, imageUrl } = props.category;
  return (
    <DirectoryItemContainer to={`/shop/${title}`}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
