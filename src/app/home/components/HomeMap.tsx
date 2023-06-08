"use client";

import MapLazy, { LazyMaker } from "./Map/MapLazy";
import { Popup } from "react-leaflet";
import { AllDestinationType } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface propMap {
  dataMap?: AllDestinationType[];
  currentLoc?: { lat: number; long: number };
  params?: string;
}

export default function HomeMap({
  dataMap,
  currentLoc = { lat: -7.797068, long: 110.370529 },
  params,
}: propMap) {
  const route = useRouter();

  return (
    <MapLazy optMap={{ center: [currentLoc?.lat, currentLoc?.long], zoom: 9 }}>
      {dataMap?.map((val) => {
        return (
          <LazyMaker
            key={val.destination_id}
            position={[val.destination_lat, val.destination_long]}
            title={val.destination_name}
          >
            <Popup className="w-44">
              <div className="flex flex-col gap-4">
                <div className="relative w-full h-24 object-cover">
                  <Image
                    fill
                    className="rounded-lg"
                    src={val.image_url}
                    alt={val.destination_name}
                  />
                </div>

                <h1 className="capitalize font-bold text-red-400 text-center">
                  {val.destination_name}
                </h1>
                <button
                  onClick={() =>
                    route.push(
                      `/home/${params}/${val.destination_name}/${val.destination_id}`
                    )
                  }
                  className="px-4 py-1 text-white rounded-lg tracking-wider bg-red-400 transition hover:bg-red-700"
                >
                  Detail
                </button>
              </div>
            </Popup>
          </LazyMaker>
        );
      })}
    </MapLazy>
  );
}
