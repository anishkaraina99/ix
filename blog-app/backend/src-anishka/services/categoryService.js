const getCategories = async () => {
  try {
    const data = await fetch(
      "https://localhost:8000/api/categories",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const categoryAPIData = await data.json();
    console.log(categoryAPIData.message);
    return categoryAPIData.data;
  } catch (err) {
    throw new Error(err);
  }
};

const categoryService = {
  getCategories,
};

export default categoryService;