import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"

    >
        <rect x="0" y="217" rx="10" ry="10" width="260" height="27" />
        <rect x="0" y="352" rx="10" ry="10" width="94" height="37" />
        <rect x="66" y="382" rx="0" ry="0" width="0" height="1" />
        <rect x="143" y="341" rx="10" ry="10" width="119" height="52" />
        <circle cx="126" cy="110" r="89" />
        <rect x="0" y="261" rx="10" ry="10" width="260" height="68" />
    </ContentLoader>
);

export default Sceleton;