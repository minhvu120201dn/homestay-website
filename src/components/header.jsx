import React, { useContext } from 'react';
import ReactPlayer from 'react-player';
import Switch from 'react-switch';

import { LanguageContext } from '../contexts/language';
import { GetLanguage } from './utils';

function Header() {
    const { usingVN, setUsingVN } = useContext(LanguageContext);
    return (
        <>
            <header id="home">
                <div className="bg-img" style={{ backgroundImage: "url('./img/banner.jpg')" }}>
                    {/* <div className="overlay"></div> */}
                </div>
                <nav id="nav" className="navbar nav-transparent">
                    <div className="container">
                        <div className="navbar-header">
                            <div className="navbar-brand">
                                <a href="index.html">
                                    <img className="logo" src="img/logo.png" alt="logo" />
                                    <img className="logo-alt" src="img/logo.png" alt="logo" />
                                </a>
                            </div>

                            <div className="nav-collapse">
                                <span></span>
                            </div>
                        </div>

                        <ul className="main-nav nav navbar-nav navbar-right">
                            <li><a href="#home"><GetLanguage vn="Trang chủ" en="Home" /></a></li>
                            <li><a href="#about"><GetLanguage vn="Giới thiệu" en="Introduction" /></a></li>
                            <li><a href="#rooms"><GetLanguage vn="Không gian phòng" en="Room" /></a></li>
                            <li><a href="#services"><GetLanguage vn="Dịch vụ" en="Services" /></a></li>
                            <li><a href="#rules"><GetLanguage vn="Quy tắc chung" en="Rules" /></a></li>
                            <li><a href="#nearby"><GetLanguage vn="Khu vực lân cận" en="Nearby Area" /></a></li>
                            <li><a href="#contact"><GetLanguage vn="Liên hệ" en="Contact" /></a></li>
                            <li style={{ marginTop: "10px" }}>
                                <Switch
                                    className="react-switch"
                                    onChange={() => setUsingVN(!usingVN)}
                                    checked={usingVN}
                                    offColor="#08f"
                                    onColor="#0ff"
                                    offHandleColor="#0ff"
                                    onHandleColor="#08f"
                                    height={30}
                                    width={70}
                                    checkedIcon={
                                        <span role="img" aria-label="vn-flag"
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "100%",
                                            }}
                                        >
                                            🇻🇳
                                        </span>
                                    }
                                    uncheckedIcon={
                                        <span role="img" aria-label="uk-flag"
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "100%"
                                            }}
                                        >
                                            🇬🇧
                                        </span>
                                    }
                                    aria-label="super secret label that is not visible"
                                />
                            </li>
                        </ul>

                    </div>
                </nav>
                <div className="home-wrapper">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-10 col-md-offset-1">
                                <div className="home-content">
                                    <h1 className="white-text" style={{ fontStyle: 'italic' }}>Phước Hải</h1>
                                    <h2 className="white-text">Lekima Homestay</h2>
                                    <p className="white-text">
                                        <GetLanguage
                                            vn={
                                                <span>
                                                    Lekima Phước Hải Homestay là một điểm đến lý tưởng cho
                                                    những ai muốn trốn chạy khỏi nhịp sống đô thị ồn ào,
                                                    hòa mình vào không gian yên bình của biển cả và thiên
                                                    nhiên hoang dã.
                                                </span>
                                            }
                                            en={
                                                <span>
                                                    Lekima Phuoc Hai Homestay is an ideal destination for
                                                    whoever wants to escape from the noisy urban life and
                                                    immerses in the peaceful atmosphere of the sea and
                                                    the wildlife.
                                                </span>
                                            }
                                        />
                                    </p>
                                    {/* <button className="white-btn">Get Started!</button> */}
                                    <button className="main-btn"><GetLanguage
                                        vn={
                                            <span>
                                                Giới thiệu
                                            </span>
                                        }
                                        en={
                                            <span>
                                                Introduce
                                            </span>
                                        }
                                    /></button>
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
                            <GetLanguage
                                vn={<>
                                    <div className="section-header">
                                        <h2 className="title">Chào mừng đến với Homestay của chúng tôi</h2>
                                    </div>
                                    <p>Lekima homestay có diện tích xây dựng 160m2 với 4 phòng ngủ, trong đó có
                                        2 phòng đôi và 2 phòng có 2 giường đơn trong đó có một phòng trên lầu, cùng
                                        với 3 nhà vệ sinh. Khu sinh hoạt chung bao gồm phòng khách và gian bếp rộng
                                        rãi đầy đủ tiện nghi được thiết kế mở.</p>
                                    <p>Trang thiết bị cao cấp mỹ thuật, tạo cảm giác khác biệt, đặc biệt thiết
                                        kế rất thoáng mát. Phù hợp cho du khách đi theo nhóm hoặc gia đình với sức
                                        chứa tối đa lên đến 10 người. Được thiết kế với văn hóa bản địa pha lẫn
                                        Indochina cổ điển.</p>
                                </>}
                                en={<>
                                    <div className="section-header">
                                        <h2 className="title">Welcome to our Homestay</h2>
                                    </div>
                                    <p>Lekima homestay has a total area of 160m2 with 4 bedrooms, including 2
                                        double rooms, 2 rooms with a pair of beds, and with 3 bathrooms. The
                                        indoor common area covers a living room and a bedroom with ventilated
                                        design, allowing adequate atmosphere.</p>
                                    <p>High-end art equipment, creating a different impression, especially with the
                                        spacious arrangement. Sufficient for a groups of travelers, or a family, with
                                        as much as up to 10 individuals. Our design is based on the indigenous
                                        culture, mixing with classical Indochinese concepts.</p>
                                </>}
                            />
                        </div>

                        <div className="col-md-6">
                            {/* <ReactPlayer url='https://www.youtube.com/watch?v=oUFJJNQGwhk' /> */}
                            <video width="100%" height="100%"
                                src="./img/lekima-intro.mp4"
                                muted
                                autoPlay
                                loop
                            />
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Header;