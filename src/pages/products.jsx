import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "./images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt, ex quasi maiores eaque repellendus, sapiente assumenda, odio non aut consectetur. Quod, inventore. Itaque cum commodi tempora eos assumenda recusandae.`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 500.000",
    image: "./images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt, ex quasi maiores eaque repellendus.`,
  },
  {
    id: 3,
    name: "Sepatu Adadong",
    price: "Rp 2.000.000",
    image: "./images/shoes-1.jpg",
    description: `Ini adalah sepatu baru dari brand Adadong.`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.name}>{product.description}</CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;