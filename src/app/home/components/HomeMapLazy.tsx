import dynamic from "next/dynamic";

const HomeMapLazy = dynamic(() => import("./HomeMap"), { ssr: false });

export default HomeMapLazy;
