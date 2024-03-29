import "./Product.css";

const Products = ({ result }) => {
  return (
    <div>
      <section className="card-container" style={{display:'flex'}}>{result}</section>
    </div>
  );
};

export default Products;
