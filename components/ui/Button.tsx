import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "slim";
  size?: "xs" | "sm" | "md" | "lg";
  color?: "default" | "red";
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  color = "default",
  className = "",
  ...props
}: ButtonProps) => {
  const base =
    "font-solid cursor-pointer border-2 rounded-xl bg-background transition-all shadow-[2px_2px_0px_var(--foreground)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px]";

  const variants = {
    primary: "",
    slim: "border-[1px] font-sans shadow-none rounded-lg"
  };

  const sizes = {
    xs: "text-xs px-2 py-1",
    sm: "text-sm px-3 py-1",
    md: "text-xl px-6 py-3",
    lg: "text-2xl px-8 py-4",
  };

  const colors = {
    default: "border-foreground",
    red: "border-red-600 shadow-[2px_2px_0px_oklch(57.7%_0.245_27.325)]",
  }

  return (
    <button
      className={cn(base, colors[color], variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;