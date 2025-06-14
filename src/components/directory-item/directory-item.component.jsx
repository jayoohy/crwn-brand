import { Link } from "react-router-dom";
import {
  DirectoryItemContainer,
  DirectoryItemBody,
  BackgroundImage,
} from "./directory-item.styles.jsx";

const DirectoryItem = (props) => {
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
