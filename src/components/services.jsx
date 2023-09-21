import React from "react";

import { GetLanguage } from "./utils";

function Services() {
    return (
        <div id="services" className="section md-padding">

            <div className="container">

                <div className="row">

                    <div className="section-header text-center">
                        <h2 className="title"><GetLanguage vn="Tiện Ích" en="Services" /></h2>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="service">
                            <i className={"fa fa-diamond"} />
                            <GetLanguage
                                vn={<>
                                    <h3>Chỗ đậu xe</h3>
                                    <p>Chỗ đỗ xe miễn phí, đậu xe trong khuôn viên.</p>
                                </>}
                                en={<>
                                    <h3>Parking lot</h3>
                                    <p>Free parking lot, inside the campus</p>
                                </>}
                            />
                        </div>
                        <div className="service">
                            <i className={"fa fa-rocket"} />
                            <GetLanguage
                                vn={<>
                                    <h3>Nhà bếp</h3>
                                    <p>Bếp, tủ lạnh, máy giặt.</p>
                                </>}
                                en={<>
                                    <h3>Kitchen</h3>
                                    <p>A cooker, a refrigerator, and a washer</p>
                                </>}
                            />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="service">
                            <i className={"fa fa-paw"} />
                            <GetLanguage
                                vn={<>
                                    <h3>Vật nuôi</h3>
                                    <p>Cho phép mang theo vật nuôi, chỉ cần thông báo trước cho quản lý.</p>
                                </>}
                                en={<>
                                    <h3>Pet</h3>
                                    <p>Pet is allowed, but need to inform the manager</p>
                                </>}
                            />
                        </div>
                        <div className="service">
                            <i className={"fa fa-wifi"} />
                            <h3>Internet</h3>
                            <p><GetLanguage vn="Wi-fi miễn phí." en="Free wi-fi" /></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="service">
                            <i className={"fa fa-check"} />
                            <GetLanguage
                                vn={<>
                                    <h3>Các tiện nghi khác</h3>
                                    <p>Điều hòa nhiệt độ</p>                                 
                                    <p>Phòng gia đình</p>
                                    <p>Phòng không hút thuốc</p>
                                </>}
                                en={<>
                                    <h3>Other services</h3>
                                    <p>Air conditioning</p>
                                    <p>No smoking in the campus</p>
                                    <p>Family room</p>
                                    <p>Non-smoking room</p>
                                </>}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;