import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import HomePage from "./pages/HomePage/HomePage";
import SubCategoryPage from "./pages/SubCategoryPage/SubCategoryPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":category">
          <Route element={<CategoryPage />} index></Route>
          <Route path=":subcategory" element={<SubCategoryPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
