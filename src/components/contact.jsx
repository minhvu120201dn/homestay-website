import React from "react";
// import Map from './map';

import { GetLanguage } from "./utils";

function Contact() {
    return (
        <div id="contact" className="section md-padding">

            <div className="container">

                <div className="row">

                    <div className="section-header text-center">
                        <h2 className="title"><GetLanguage vn="Thông tin liên hệ" en="Contact" /></h2>
                    </div>
                    <div className="col-sm-4">
                        <div className="contact">
                            <i className="fa fa-phone"></i>
                            <h3>Hotline</h3>
                            <p>0912442278 <GetLanguage vn="hoặc" en="or" /> 0912367830</p>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="contact">
                            <i className="fa fa-envelope"></i>
                            <h3>Email</h3>
                            <p>email@support.com</p>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="contact">
                            <i className="fa fa-map-marker"></i>
                            <GetLanguage
                                vn={<>
                                    <h3>Địa chỉ</h3>
                                    <p>Trần Quý Dõng, khu phố Hải Sơn, thị trấn Phước Hải,
                                    huyện Đất Đỏ, tỉnh Bà Rịa - Vũng Tàu</p>
                                </>}
                                en={<>
                                    <h3>Address</h3>
                                    <p>Tran Quy Dung, Hai Son Quarter, Phuoc Hai Town, Dat
                                    Do District, Ba Ria - Vung Tau Province</p>
                                </>}
                            />
                        </div>
                    </div>

                    <div className="col-md-8 col-md-offset-2">
                        {/* <Map
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        /> */}
                    </div>

                    <div className="col-md-8 col-md-offset-2">
                        <form className="contact-form">
                            <input type="text" className="input" placeholder="Tên" />
                            <input type="email" className="input" placeholder="Email" />
                            <textarea className="input" placeholder="Nhập tin nhắn..."></textarea>
                            <button className="main-btn">Gửi tin nhắn</button>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact;