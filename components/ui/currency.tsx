"use client";

import React, { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

interface CurrencyProps {
  value?: number | string;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
