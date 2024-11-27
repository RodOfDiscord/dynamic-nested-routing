import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import HomePage from "./pages/HomePage/HomePage";
import SubCategoryPage from "./pages/SubCategoryPage/SubCategoryPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":category">
          <Route element={<CategoryPage />} index></Route>
          <Route path=":subcategory" element={<SubCategoryPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
