import DirectoryItem from "../directory-item/directory-item.component";
import categories from "../categories-menu.json";
import { DirectoryContainer } from "./directory.styles.jsx";

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
