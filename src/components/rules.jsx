import React from "react";

import { GetLanguage } from "./utils";

function CommonRules() {
    return (

        <div id="rules" className="section md-padding">

            <div className="container">

                <div className="row">

                    <div className="section-header text-center">
                        <h2 className="title"><GetLanguage vn="Quy tắc chung" en="Rules" /></h2>
                    </div>
                    <div className="rule">
                        <i className={"fa fa-sign-in"} />
                        <GetLanguage
                            vn={<>
                                <h3>Nhận phòng</h3>
                                <p>Giờ nhận phòng: 13:00 - 20:00.</p>
                            </>}
                            en={<>
                                <h3>Check-in</h3>
                                <p>Check-in time: 13:00 - 20:00</p>
                            </>}
                        />
                    </div>
                    <div className="rule">
                        <i className={"fa fa-sign-out"} />
                        <GetLanguage
                            vn={<>
                                <h3>Trả phòng</h3>
                                <p>Giờ trả phòng: 8:00 - 12:00</p>
                            </>}
                            en={<>
                                <h3>Check-out</h3>
                                <p>Check-out time: 8:00 - 12:00</p>
                            </>}
                        />
                    </div>
                    <div className="rule">
                        <i className={"fa fa-paw"} />
                        <GetLanguage
                            vn={<>
                                <h3>Vật nuôi</h3>
                                <p>Cho phép mang theo vật nuôi, chỉ cần thông báo trước cho quản lý.</p>
                            </>}
                            en={<>
                                <h3>Pet</h3>
                                <p>Pet is allowed, just need to inform the manager in advance.</p>
                            </>}
                        />
                    </div>
                    <div className="rule">
                        <i className={"fa fa-child"} />
                        <GetLanguage
                            vn={<>
                                <h3>Cho trẻ em</h3>
                                <p>
                                    Phù hợp cho tất cả trẻ em.<br />
                                    Không cung cấp nôi/cũi và giường phụ.
                                </p>
                            </>}
                            en={<>
                                <h3>For children</h3>
                                <p>
                                    Suitable for children.<br />
                                    No cradle/crib provided.
                                </p>
                            </>}
                        />
                    </div>
                    <div className="rule">
                        <i className={"fa fa-credit-card"} />
                        <GetLanguage
                            vn={<>
                                <h3>Thanh toán</h3>
                                <p>Thanh toán bằng tiền mặt hoặc chuyển khoản.</p>
                            </>}
                            en={<>
                                <h3>Payment</h3>
                                <p>Payment can be by cash or bank transfer.</p>
                            </>}
                        />
                    </div>
                    <div className="rule">
                        <i className={"fa fa-ban"} />
                        <GetLanguage
                            vn={<>
                                <h3>Quy định</h3>
                                <p>
                                    Cấm hút thuốc trong toàn bộ khuôn viên
                                </p>
                            </>}
                            en={<>
                                <h3>Rule</h3>
                                <p>
                                    No Smoking
                                </p>
                            </>}
                        />
                    </div>
                </div>

            </div>

        </div>
        // <>
        // <div id="services" className="section md-padding">
        // </div>
        // <div id="rules" className="section md-padding">

        // <div id="#" className="section md-padding bg-grey">

        //     <div className="container">

        //         <div className="row">
        //             <div className="col-md-6">
        //                 <div className="section-header">
        //                     <h2 className="title"><GetLanguage vn="Quy tắc chung" en="Common rules"/></h2>
        //                 </div>
        //                 <div className="feature">
        //                     <i className="fa fa-sign-in"></i>
        //                     <p>Nhận phòng: 13:00 - 20:00</p>
        //                 </div>
        //                 <div className="feature">
        //                     <i className="fa fa-sign-out"></i>
        //                     <p>Trả phòng: 8:00 - 12:00</p>
        //                 </div>
        //                 <div className="feature">
        //                     <i className="fa fa-info"></i>
        //                     <p>Hủy đặt phòng/Trả trước: Các loại căn hộ khác nhau có thể có chính sách hủy đặt
        //                     phòng và chính sách thanh toán trước không giống nhau. Vui lòng nhập ngày tháng lưu
        //                     trú và kiểm tra các điều kiện của phòng bạn chọn.</p>
        //                 </div>
        //                 <div className="feature">
        //                     <i className="fa fa-paw"></i>
        //                     <p>Cho phép mang theo vật nuôi, chỉ cần thông báo trước cho quản lý.</p>
        //                 </div>
        //                 <div className="feature">
        //                     <i className="fa fa-child"></i>
        //                     <p>Trẻ em và giường:</p>
        //                 </div>
        //             </div>

        //             <div className="col-md-6">
        //                 <div id="about-slider" className="owl-carousel owl-theme">
        //                     <img className="img-responsive" src="./img/about1.jpg" alt="" />
        //                     <img className="img-responsive" src="./img/about2.jpg" alt="" />
        //                     <img className="img-responsive" src="./img/about1.jpg" alt="" />
        //                     <img className="img-responsive" src="./img/about2.jpg" alt="" />
        //                 </div>
        //             </div>

        //         </div>

        //     </div>

        // </div>

        // </div>
        // </>
    );
}

export default CommonRules;