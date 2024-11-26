import { useParams } from "react-router-dom";

function CategoryPage() {
  const params = useParams();
  return (
    <>
      <h1>Category - {params.category}</h1>
    </>
  );
}

export default CategoryPage;
