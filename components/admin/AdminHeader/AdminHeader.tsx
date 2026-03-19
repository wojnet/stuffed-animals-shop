import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import UserIcon from "@/public/user-svgrepo-com.svg";
import ThemeToggle from "@/components/ui/ThemeToggle";

const AdminHeader = async () => {
  const session = await auth();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <header className="w-full h-24 flex justify-between items-center p-5">
      <h1 className="text-4xl">STUFFED DASHBOARD</h1>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Image
          width={64}
          height={64}
          src={session.user?.image || UserIcon}
          alt="Profile Picture"
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default AdminHeader;