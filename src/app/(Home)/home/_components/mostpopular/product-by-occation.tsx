"use client";
import React from "react";
import useGetProductsByOccasion from "../_hooks/oroducts-by-occastion";

export default function ProductByOccasion(id: any) {
  const { payload, isLoading } = useGetProductsByOccasion(id);

  return (
    <div>
      {/* Products */}
      <div className="mt-8">
        {isLoading ? (
          <p>Loading products...</p>
        ) : (
          <ul>
            {payload?.products?.map((P) => (
              <li key={P._id}>{P.description}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


