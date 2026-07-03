import { notFound } from "next/navigation";
import products from "@/data/products";
import ProductGallery from "@/components/ProductGallery";
import BadgeList from "@/components/BadgeList";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

 const product = products.find((p) => p.id === id);

if (!product) {
  notFound();
}

return (

    <main className="min-h-screen bg-[#0D1117] text-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">

          <ProductGallery
  images={product.images}
  title={product.title}
/>

          <div>
            <h1 className="text-5xl font-bold mb-4">
              {product.title}
            </h1>

           <div className="mb-6">
            <BadgeList product={product} />
          </div>

            <p className="text-gray-300 leading-8 mb-8">
              {product.fullDescription}
            </p>

            <p className="text-5xl font-extrabold text-orange-400 mb-6">
              {product.pricePrefix && `${product.pricePrefix} `}
              {product.currency}
              {product.price.toLocaleString()}
            </p>

            <div className="mb-8">
              <span className="bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 px-4 py-2 rounded-full">
                {product.status}
              </span>
            </div>

            <a
              href={`https://wa.me/27731018848?text=${encodeURIComponent(
              product.whatsappMessage
            )}`}
            
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-green-600 hover:bg-green-700 px-10 py-4 rounded-xl font-bold text-lg transition"
>
  Request on WhatsApp
</a>
          </div>

        </div>
      </section>
    </main>
  );
}