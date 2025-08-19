import {
  selectCategories,
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../category.selector";

const mockState = {
  categories: {
    isLoading: false,
    categories: [
      {
        title: "mens",
        imageUrl: "test",
        items: [
          { id: 1, name: "Product 1" },
          { id: 2, name: "Product 2" },
        ],
      },
      {
        title: "womens",
        imageUrl: "test2",
        items: [
          { id: 3, name: "Product 3" },
          { id: 4, name: "Product 4" },
        ],
      },
    ],
  },
};

describe("category selector tests", () => {
  test("selectCategories should return categories data", () => {
    const categoriesSlice = selectCategories(mockState);
    expect(categoriesSlice).toBe(mockState.categories.categories);
  });

  test("selectCategoriesIsLoading should return loading state", () => {
    const isLoading = selectCategoriesIsLoading(mockState);
    expect(isLoading).toBe(mockState.categories.isLoading);
  });

  test("selectCategoriesMap should convert the items array to appropriate map", () => {
    const expectedCategoriesMap = {
      mens: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
      ],
      womens: [
        { id: 3, name: "Product 3" },
        { id: 4, name: "Product 4" },
      ],
    };
    const categoriesMap = selectCategoriesMap(mockState);
    expect(categoriesMap).toEqual(expectedCategoriesMap);
  });
});
