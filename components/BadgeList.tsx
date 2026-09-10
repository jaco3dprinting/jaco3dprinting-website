import {
  Palette,
  Ruler,
  Package,
  Layers3,
} from "lucide-react";

import type { ProductWithDefaults } from "@/data/products";

type Props = {
  product: ProductWithDefaults;
};

export default function BadgeList({ product }: Props) {
  const badges = [];

  product.materials?.forEach((material) =>
  badges.push({
    label: material,
    icon: <Layers3 size={14} />,
  })
);

  if (product.multiColour) {
    badges.push({
      label: "Multi-Colour",
      icon: <Palette size={14} />,
    });
  }

  if (product.variousSizes) {
    badges.push({
      label: "Various Sizes",
      icon: <Ruler size={14} />,
    });
  }

  product.badges?.forEach((badge) =>
    badges.push({
      label: badge,
      icon: <Package size={14} />,
    })
  );

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <span
          key={badge.label}
          className="inline-flex items-center gap-1 bg-cyan-500/10 border border-cyan-500 text-cyan-300 px-3 py-1 rounded-full text-sm"
        >
          {badge.icon}
          {badge.label}
        </span>
      ))}
    </div>
  );
}