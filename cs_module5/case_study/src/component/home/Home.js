import React, { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";

{
  /* Automatic Slideshow - change image every 4 seconds */
}
var myIndex = 0;
let timeout;
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  timeout = setTimeout(carousel, 4000);
}

function Home() {
  useEffect(() => {
    carousel();

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <div style={{ maxWidth: 2000, marginTop: 70 }}>
        {/* Automatic Slideshow Images */}
        <div className="mySlides">
          <img
            src="img/Vietnam_Danang_Furama_Resort_Exterior_Ocean-Pool-6.jpg"
            style={{ width: "100%" }}
            height="10%"
          />
          <div className="slider-content">
            <h3>KHU NGHỈ DƯỠNG ẨM THỰC</h3>
            <h3>TỌA LẠC TẠI BÃI BIỂN ĐÀ NẴNG</h3>
            <h3>MỘT TRONG 6 BÃI BIỂN ĐẸP NHẤT THẾ GIỚI</h3>
          </div>
        </div>
        <div className="mySlides">
          <img
            src="img/Vietnam_Danang_Furama_Resort_Exterior-Furama-girl-with-pink-hat.jpg"
            style={{ width: "100%" }}
            height="10%"
          />
          <div className="slider-content">
            <h3>KHU NGHỈ DƯỠNG ẨM THỰC</h3>
            <h3>TỌA LẠC TẠI BÃI BIỂN ĐÀ NẴNG</h3>
            <h3>MỘT TRONG 6 BÃI BIỂN ĐẸP NHẤT THẾ GIỚI</h3>
          </div>
        </div>
        <div className="mySlides">
          <img
            src="img/Vietnam_Danang_Furama_Resort_Exterior_Courtyard.jpg"
            style={{ width: "100%" }}
            height="10%"
          />
          <div className="slider-content">
            <h3>KHU NGHỈ DƯỠNG ẨM THỰC</h3>
            <h3>TỌA LẠC TẠI BÃI BIỂN ĐÀ NẴNG</h3>
            <h3>MỘT TRONG 6 BÃI BIỂN ĐẸP NHẤT THẾ GIỚI</h3>
          </div>
        </div>
      </div>
      {/* content */}
      <div className="container mt-5 mb-5">
        <div className="row mb-3">
          <div className="col-4">
            <h2
              style={{
                fontSize: 24,
                color: "#cbbe73",
                textAlign: "left",
                fontFamily: "Playfair Display",
                fontWeight: 700,
                fontStyle: "normal",
              }}
            >
              KHU NGHỈ DƯỠNG ĐẲNG CẤP THẾ GIỚI, FURAMA ĐÀ NẴNG, NỔI TIẾNG LÀ KHU
              NGHỈ DƯỠNG ẨM THỰC TẠI VIỆT NAM.
            </h2>
          </div>
          <div className="col-4">
            <a
              href="https://www.youtube.com/watch?v=IjlT_4mvd-c"
              className="video-btn js-video-btn"
            >
              <img
                src="img/Vietnam_Danang_Furama_Resort_Exterior_Beach.jpg"
                alt=""
                width={1000}
                height={754}
                className="img-fluid"
                srcSet=""
              />
            </a>
          </div>
          <div className="col-4">
            <p style={{ textAlign: "justify", fontSize: 12 }}>
              Hướng ra bãi biển Đà Nẵng trải dài cát trắng, Furama Resort Đà
              Nẵng là cửa ngõ đến với 3 di sản văn hoá thế giới: Hội An (20
              phút), Mỹ Sơn (90 phút) và Huế (2 tiếng. 196 phòng hạng sang cùng
              với 70 căn biệt thự từ hai đến bốn phòng ngủ có hồ bơi riêng đều
              được trang trí trang nhã, theo phong cách thiết kế truyền thống
              của Việt Nam và kiến trúc thuộc địa của Pháp, biến Furama thành
              khu nghỉ dưỡng danh giá nhất tại Việt Nam – vinh dự được đón tiếp
              nhiều người nổi tiếng, giới hoàng gia, chính khách, ngôi sao điện
              ảnh và các nhà lãnh đạo kinh doanh quốc tế.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="text-center">
            <h2
              style={{
                fontSize: 24,
                color: "#cbbe73",
                textAlign: "center",
                fontFamily: "Playfair Display",
                fontWeight: 700,
                fontStyle: "normal",
              }}
            >
              CÁC LOẠI PHÒNG
            </h2>
            <p style={{ fontSize: 12 }} className="">
              Khu nghỉ dưỡng có 196 phòng được thiết kế theo phong cách truyền
              thống Việt Nam kết hợp với phong cách Pháp, 2 tòa nhà 4 tầng có
              hướng nhìn ra biển, nhìn ra hồ bơi trong xanh và những khu vườn
              nhiệt đới xanh tươi mát. Ngoài ra, khu nghỉ dưỡng Furama còn cung
              cấp các liệu pháp spa, phòng xông hơi ướt, phòng xông hơi khô,
              dịch vụ mát-xa cạnh hồ bơi, các dịch vụ thể thao dưới nước và các
              lớp tập yoga và Thái Cực Quyền trên bãi biển.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
