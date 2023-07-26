import React from "react";

function Services() {
    return (
        <>
            <div id="services" className="section md-padding">

                <div className="container">

                    <div className="row">

                        <div className="section-header text-center">
                            <h2 className="title">Các Tiện Nghi Của Lekima Homestay</h2>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service">
                                <i className={"fa fa-diamond"} />
                                <h3>Chỗ đậu xe</h3>
                                <p>Chỗ đỗ xe miễn phí, đậu xe trong khuôn viên.</p>
                            </div>
                            <div className="service">
                                <i className={"fa fa-rocket"} />
                                <h3>Nhà bếp</h3>
                                <p>Bếp, tủ lạnh, máy giặt.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service">
                                <i className={"fa fa-paw"} />
                                <h3>Vật nuôi</h3>
                                <p>Cho phép mang theo vật nuôi, chỉ cần thông báo trước cho quản lý.</p>
                            </div>
                            <div className="service">
                                <i className={"fa fa-wifi"} />
                                <h3>Internet</h3>
                                <p>Wi-fi miễn phí.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="service">
                                <i className={"fa fa-check"} />
                                <h3>Các tiện nghi khác</h3>
                                <p>Điều hòa nhiệt độ</p>
                                <p>Cấm hút thuốc trong khuôn viên</p>
                                <p>Phòng gia đình</p>
                                <p>Phòng không hút thuốc</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* <div id="#" className="section md-padding bg-grey">

                <div className="container">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-header">
                                <h2 className="title">Các tiện nghi của Lekima Homestay</h2>
                            </div>
                            <div className="feature">
                                <i className="fa fa-check"></i>
                                <p>Dịch vụ Internet, WiFi miễn phí.</p>
                            </div>
                            <div className="feature">
                                <i className="fa fa-check"></i>
                                <p>Chỗ đỗ xe miễn phí, đậu xe trong khuôn viên.</p>
                            </div>
                            <div className="feature">
                                <i className="fa fa-check"></i>
                                <p>Có điều hòa nhiệt độ</p>
                            </div>
                            <div className="feature">
                                <i className="fa fa-check"></i>
                                <p>Cho phép mang theo vật nuôi, chỉ cần thông báo trước cho quản lý.</p>
                            </div>
                            <div className="feature">
                                <i className="fa fa-check"></i>
                                <p>Cấm hút thuốc trong toàn bộ khuôn viên.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div id="about-slider" className="owl-carousel owl-theme">
                                <img className="img-responsive" src="./img/about1.jpg" alt="" />
                                <img className="img-responsive" src="./img/about2.jpg" alt="" />
                                <img className="img-responsive" src="./img/about1.jpg" alt="" />
                                <img className="img-responsive" src="./img/about2.jpg" alt="" />
                            </div>
                        </div>

                    </div>

                </div>

            </div> */}
        </>
    );
}

export default Services;