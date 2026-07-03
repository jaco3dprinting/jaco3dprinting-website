import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import categories from "@/data/categories";

export default function Products() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-white">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-6">
          Products & Services
        </h1>

        <p className="text-xl text-center text-gray-400 mb-16">
          Popular products, custom printing and professional services.
        </p>

        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category.id
          );

          if (categoryProducts.length === 0) return null;

          return (
            <section key={category.id} className="mb-20">
              <h2 className="text-3xl font-bold mb-3">
                {category.icon} {category.name}
              </h2>

              <p className="text-gray-400 mb-8">
                {category.description}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}