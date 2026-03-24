import ProductGrid from "@/components/shop/Products/ProductGrid";
import ProductTile from "@/components/shop/Products/ProductTile";
import { getProducts } from "@/lib/db/products";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <ProductGrid>
        {products.map((product) => (
          <ProductTile
            key={product.id}
            product={product}
          />
        ))}
      </ProductGrid>
    </div>
  );
};

export default ProductsPage;