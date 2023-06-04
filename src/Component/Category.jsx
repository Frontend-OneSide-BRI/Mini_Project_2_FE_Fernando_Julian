const Category = ({ category }) => {
  return (
    <div className="category">
      <h3>{category.name}</h3>
      <div className="category__products">
        {category.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
