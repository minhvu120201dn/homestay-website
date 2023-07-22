import React from 'react';
import ReactPlayer from 'react-player';

function Header() {
    return (
        <>
        <header id="home">
            <div className="bg-img" style={{ backgroundImage: "url('./img/homestay.jpg')" }}>
                <div className="overlay"></div>
            </div>
            <nav id="nav" className="navbar nav-transparent">
                <div className="container">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            <a href="index.html">
                                <img className="logo" src="img/logo.png" alt="logo" />
                                <img className="logo-alt" src="img/logo-alt.png" alt="logo" />
                            </a>
                        </div>

                        <div className="nav-collapse">
                            <span></span>
                        </div>
                    </div>

                    <ul className="main-nav nav navbar-nav navbar-right">
                        <li><a href="#home">Trang chủ</a></li>
                        <li><a href="#about">Giới thiệu</a></li>
                        <li><a href="#rooms">Không gian phòng</a></li>
                        <li><a href="#services">Dịch vụ</a></li>
                        <li><a href="#pricing">Chi phí thuê</a></li>
                        <li><a href="#comments">Đánh giá</a></li>
                        {/*
                        <li className="has-dropdown"><a href="#blog">Blog</a>
                            <ul className="dropdown">
                                <li><a href="blog-single.html">blog post</a></li>
                            </ul>
                        </li>
                        */}
                        <li><a href="#contact">Liên hệ</a></li>
                    </ul>

                </div>
            </nav>
            <div className="home-wrapper">
                <div className="container">
                    <div className="row">

                        <div className="col-md-10 col-md-offset-1">
                            <div className="home-content">
                                <h1 className="white-text">Lekima Homestay</h1>
                                <p className="white-text">Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere.
                                </p>
                                <button className="white-btn">Get Started!</button>
                                <button className="main-btn">Learn more</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
        <div id="features" className="section md-padding bg-grey">

            <div className="container">

                <div className="row">
                    <div className="col-md-6">
                        <div className="section-header">
                            <h2 className="title">Welcome To Our Homestay</h2>
                        </div>
                        <p>Lekima homestay có diện tích xây dựng 160m2 với 4 phòng ngủ, trong đó có 2 phòng đôi và 2 phòng có 2 giường đơn trong đó có một phòng trên lầu, cùng với 3 nhà vệ sinh. Khu sinh hoạt chung bao gồm phòng khách và gian bếp rộng rãi đầy đủ tiện nghi được thiết kế mở.</p>
                        <p>Trang thiết bị cao cấp mỹ thuật, tạo cảm giác khác biệt, đặc biệt thiết kế rất thoáng mát. Phù hợp cho du khách đi theo nhóm hoặc gia đình với sức chứa tối đa lên đến 10 người. Được thiết kế với văn hóa bản địa pha lẫn Indochina cổ điển.</p>
                    </div>

                    <div className="col-md-6">
                        <ReactPlayer url='https://www.youtube.com/watch?v=oUFJJNQGwhk' />
                    </div>

                </div>

            </div>

        </div>
        </>
    );
}

export default Header;