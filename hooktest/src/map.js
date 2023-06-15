import React from 'react';
import NaverMap from 'react-naver-maps';

const MyMapComponent = () => {
  const navermaps = window.naver.maps;

  const naverMapOptions = {
    center: new navermaps.LatLng(37.5665, 126.9780), // 지도 초기 중심 좌표
    zoom: 10, // 지도 줌 레벨
  };

  return (
    <NaverMap
      id="myMap" // 지도를 표시할 HTML 엘리먼트의 id
      style={{
        width: '100%',
        height: '400px',
      }}
      defaultCenter={naverMapOptions.center}
      defaultZoom={naverMapOptions.zoom}
      naverMapAPIKey="3fgz4vqznh"
    />
  );
};

export default MyMapComponent;
