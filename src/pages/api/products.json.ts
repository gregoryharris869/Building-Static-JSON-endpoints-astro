import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const products = await getCollection(
    "products",
    ({ data }: { data: { in_stock: boolean } }) => data.in_stock
  );
  return new Response(
    JSON.stringify(products.map((d: { data: { in_stock: boolean } }) => d.data))
  );
};
