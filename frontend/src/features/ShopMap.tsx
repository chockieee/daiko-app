import { CircleOutlined, Clear } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/";

interface ShopDetail {
  id: number;
  name: string;
  address: string;
  tel: string;
  isAvailable: true;
  position: Leaflet.LatLngExpression;
}

const commonStyle = { margin: "5px 0" };

const Map = () => {
  const [shops, setShops] = useState<ShopDetail[]>([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/shops`).then((res) => {
      setShops(res.data);
    });
  }, []);

  const getHref = (shop: ShopDetail, tab: "now" | "book") => {
    return {
      pathname: `/shops/${shop.id}/request`,
      query: {
        tab,
        company: shop.name,
        isAvailable: shop.isAvailable,
      },
    };
  };

  return (
    <MapContainer
      center={[34.3425, 134.0465]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shops.map((shop, index) => {
          return (
            <Marker key={index} position={shop.position}>
              <Popup>
                <Typography
                  variant="body1"
                  style={{ margin: 0, fontWeight: "bold" }}
                >
                  {shop.name}
                </Typography>
                <Typography variant="body2" style={commonStyle}>
                  {shop.address}
                </Typography>
                <Typography variant="body2" style={commonStyle}>
                  {shop.tel}
                </Typography>
                <Box display="flex" alignItems="center" style={commonStyle}>
                  {shop.isAvailable ? (
                    <>
                      <CircleOutlined fontSize="small" />
                      <Typography variant="body2" style={{ margin: 0 }}>
                        配車可能
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Clear fontSize="small" />
                      <Typography variant="body2" style={{ margin: 0 }}>
                        配車不可
                      </Typography>
                    </>
                  )}
                </Box>
                <Box
                  py={1}
                  display="flex"
                  gap={1}
                  justifyContent="space-between"
                >
                  <Link
                    href={getHref(shop, "now")}
                    as={`/shops/${shop.id}/request`}
                    passHref
                  >
                    <Button variant="contained" disabled={!shop.isAvailable}>
                      配車手配
                    </Button>
                  </Link>
                  <Link
                    href={getHref(shop, "book")}
                    as={`/shops/${shop.id}/request`}
                    passHref
                  >
                    <Button variant="contained">予約手配</Button>
                  </Link>
                </Box>
              </Popup>
            </Marker>
          );
        })}
      </>
    </MapContainer>
  );
};

export default Map;
