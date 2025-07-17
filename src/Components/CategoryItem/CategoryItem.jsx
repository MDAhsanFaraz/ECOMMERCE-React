import { Link } from "react-router-dom";

export default function CategoryItem({ itemName }) {
  return (
    <div className="category-item  d-flex  justify-content-center align-items-center">
      <Link to="/products">{itemName}</Link>
    </div>
  );
}
