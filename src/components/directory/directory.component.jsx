import CategoryItem from "../category-item/category-item.component";
import categories from "../categories-menu.json";
import "./directory.styles.scss";

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
