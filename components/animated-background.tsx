"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the 3D model with no SSR
const Interactive3DModel = dynamic(() => import("./interactive-3d-model"));

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <Interactive3DModel />;
}
