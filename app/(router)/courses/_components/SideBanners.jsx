import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function SideBanners() {
  const [sideBannerList, setSideBannerList] = useState([]);

  useEffect(() => {
    getSideBanners();
  }, []);

  const getSideBanners = async () => {
    try {
      const resp = await GlobalApi.getSideBanner();
    //   console.log(resp);
      setSideBannerList(resp.sideBanners);
    } catch (error) {
      console.error("Failed to fetch side banners:", error);
    }
  };

  return (
    <div>
      {sideBannerList.map((item, index) => (
        <div key={item.id || index}>
          <Image
            src={item.banner.url}
            alt="banner"
            width={500}
            height={300}
            onClick={() => window.open(item?.url)}
            className="rounded-xl cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}

export default SideBanners;
