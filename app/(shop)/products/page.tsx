import ProductGrid from "@/components/shop/products/ProductGrid";
import ProductTile from "@/components/shop/products/ProductTile";
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