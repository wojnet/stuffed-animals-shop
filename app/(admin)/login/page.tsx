import { signIn } from "@/auth";
import Button from "@/components/ui/Button";

const LoginPage = async () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-solid text-4xl">Admin Panel</h1>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/admin" });
          }}
        >
          <Button
            size="md"
          >
            Sign In
          </Button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;