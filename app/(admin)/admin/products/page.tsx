import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getAdminProducts } from "@/lib/db/products";
import { formatPrice } from "@/lib/utils";
import AdminProductsList from "@/components/admin/products/AdminProductsList";
import Button from "@/components/ui/Button";

const AdminProductsPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const products = await getAdminProducts();

  return (
    <div className="flex flex-col items-center grow">
      <h2 className="text-2xl my-6">
        Products
      </h2>
      <div className="mb-6 flex justify-center">
        <Button
          size="sm"
          variant="slim"
        >
          ADD PRODUCT
        </Button>
      </div>
      <AdminProductsList
        products={products}
      />
    </div>
  );
};

export default AdminProductsPage;