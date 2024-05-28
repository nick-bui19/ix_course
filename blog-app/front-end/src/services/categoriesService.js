const getCategories = async () => {
    try {
        const data = await fetch("https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const categoriesApiData = await data.json();
        return categoriesApiData.data;
    } catch(error) {}
};

const categoriesService = {
    getCategories,
}

export default categoriesService;

//read documentations from blogService.js