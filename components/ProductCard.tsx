import Image from "next/image";
import Link from "next/link";
import type { ProductWithDefaults } from "@/data/products";
import BadgeList from "./BadgeList";

type ProductCardProps = {
  product: ProductWithDefaults;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
 
 
  return (
    <div className="group bg-[#161B22] rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 flex flex-col h-full">

      <Link href={`/products/${product.id}`}>
        <Image
          src={product.images[0]}
          alt={product.title}
          width={800}
          height={600}
          className="w-full h-72 object-contain bg-[#0D1117] p-6"
        />
      </Link>

      <div className="flex flex-col flex-1 p-6">

        <Link href={`/products/${product.id}`}>
          <h3 className="text-2xl font-bold mb-3 hover:text-cyan-400 transition cursor-pointer">
            {product.title}
          </h3>
        </Link>
<div className="mb-4">
  <BadgeList product={product} />

</div>

        <p className="text-gray-400 leading-relaxed flex-1 mb-6">
          {product.description}
        </p>

        <p className="text-4xl font-extrabold text-orange-400 mb-6">
          {product.pricePrefix && `${product.pricePrefix} `}
          {product.currency}
          {product.price.toLocaleString()}
        </p>

       <div className="mb-6">
  <span
    className={`px-3 py-1 rounded-full text-sm font-semibold ${
      product.status === "In Stock"
        ? "bg-green-500/20 text-green-400 border border-green-500/40"
        : product.status === "Made to Order"
        ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/40"
        : product.status === "Custom Order"
        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
        : product.status === "Out of Stock"
        ? "bg-red-500/20 text-red-300 border border-red-500/40"
        : "bg-gray-500/20 text-gray-300 border border-gray-500/40"
    }`}
  >
    {product.status}
  </span>
</div>

        <a
         href={`https://wa.me/27731018848?text=${encodeURIComponent(
         product.whatsappMessage
        )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block w-full text-center bg-green-600 hover:bg-green-700 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02]"
        >
          Request on WhatsApp
        </a>

      </div>
    </div>
  );
}