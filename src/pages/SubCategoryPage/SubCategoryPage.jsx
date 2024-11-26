import { useParams } from "react-router-dom";

function SubcategoryPage() {
  const params = useParams();
  return (
    <>
      <h1>Subcategory - {params.subcategory} </h1>
    </>
  );
}

export default SubcategoryPage;
