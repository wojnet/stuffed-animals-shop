"use client";

interface ProductGridProps {
  children: React.ReactNode;
}

const ProductGrid = ({ children }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
      { children }
    </div>
  );
};

export default ProductGrid;