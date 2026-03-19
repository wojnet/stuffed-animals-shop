import { Product, Category } from "@/generated/prisma/client";
import AdminProduct from "@/components/admin/products/AdminProduct";

export type AdminProductData = Product & {
  category: Category;
};

interface AdminProductsListProps {
  products: AdminProductData[];
}

const AdminProductsList = ({ products }: AdminProductsListProps) => {
  return (
    <div className="w-full flex flex-col items-stretch gap-5 p-5">
      {products.map(product => (
        <AdminProduct
          key={product.name}
          product={product}
        />
      ))}
    </div>
  );
};

export default AdminProductsList;