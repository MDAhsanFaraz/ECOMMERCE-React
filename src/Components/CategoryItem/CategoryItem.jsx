export default function CategoryItem({ itemName }) {
  return (
    <div className="category-item  d-flex  justify-content-center align-items-center">
      <a href="productList.html">{itemName}</a>
    </div>
  );
}
