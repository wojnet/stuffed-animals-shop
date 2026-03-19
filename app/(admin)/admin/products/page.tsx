import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getAdminProducts } from "@/lib/db/products";
import { formatPrice } from "@/lib/utils";
import AdminProductsList from "@/components/admin/products/AdminProductsList";

const AdminProductsPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const products = await getAdminProducts();

  return (
    <div className="flex flex-col bg-white text-[#171717] grow">
      <AdminProductsList
        products={products}
      />
    </div>
  );
};

export default AdminProductsPage;