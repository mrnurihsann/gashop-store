"use client";

import { Product } from "@/types";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import IconButton from "./icon-button";
import { Expand } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/router";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const previewModal = usePreviewModal();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group curson-pointer rounded-xl border p-3 space-y-4"
    >
      {/* images dan action */}
      <div className="aspect-square rounded-xl bg-gray-200 relative">
        <Image
          alt="Image"
          src={data?.imageUrl?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute inset-0 bg-black bg-opacity-40 rounded-xl">
          <div className="flex gap-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Product Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Product Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
