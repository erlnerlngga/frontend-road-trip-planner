import dynamic from "next/dynamic";

const MapLazy = dynamic(() => import("./MapComponent"), { ssr: false });

export const LazyMaker = dynamic(
  async () => (await import("react-leaflet")).Marker,
  { ssr: false }
);

export default MapLazy;
