import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import React from "react";

type ShopDetail = {
  id: string;
  name: string;
  time: string;
  fee: string;
};

function MapPage() {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("../features/ShopMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return <Map />;
}

export default MapPage;
