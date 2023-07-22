import React from "react";

function ServiceCard(props) {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="service">
                <i className={"fa fa-"+props.icon} />
                {props.children}
            </div>
        </div>
    )
}

function Services() {
    return (
        <>
        <div id="services" className="section md-padding">

            <div className="container">

                <div className="row">

                    <div className="section-header text-center">
                        <h2 className="title">Dịch vụ</h2>
                    </div>

                    <ServiceCard icon="diamond">
                        <h3>App Development</h3>
                        <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                    </ServiceCard>

                    <ServiceCard icon="rocket">
                        <h3>Graphic Design</h3>
                        <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                    </ServiceCard>

                    <ServiceCard icon="cogs">
                        <h3>Create Idea</h3>
                        <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                    </ServiceCard>

                    <ServiceCard icon="diamond">
                        <h3>Marketing</h3>
                        <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                    </ServiceCard>

                    <ServiceCard icon="pencil">
                        <h3>Awesome Support</h3>
                        <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                    </ServiceCard>

                    <ServiceCard icon="flask">
                        <h3>Brand Design</h3>
                        <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero.</p>
                    </ServiceCard>

                </div>

            </div>

        </div>

        <div id="#" className="section md-padding bg-grey">

            <div className="container">

                <div className="row">
                    <div className="col-md-6">
                        <div className="section-header">
                            <h2 className="title">Các tiện ích khác</h2>
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

        </div>
        </>
    );
}

export default Services;