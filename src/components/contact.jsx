import React from "react";

function Contact() {
    return (
        <div id="contact" className="section md-padding">

            <div className="container">

                <div className="row">

                    <div className="section-header text-center">
                        <h2 className="title">Thông tin liên hệ</h2>
                    </div>
                    <div className="col-sm-4">
                        <div className="contact">
                            <i className="fa fa-phone"></i>
                            <h3>Hotline</h3>
                            <p>0912442278 hoặc 0912367830</p>
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
                            <h3>Địa chỉ</h3>
                            <p>Trần Quý Dõng, khu phố Hải Sơn, thị trấn Phước Hải, huyện Đất Đỏ, tỉnh Bà Rịa – Vũng Tàu</p>
                        </div>
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