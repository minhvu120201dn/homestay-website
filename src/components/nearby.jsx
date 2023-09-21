import React from "react";

import { GetLanguage } from "./utils";

function NearbyImgCard(props) {
    return (
        <div className="col-md-3 col-xs-6 work">
            <img className="img-responsive" src={props.src} alt="" style={{ height: '350px' }} />
            <div className="overlay"></div>
            <div className="work-content">
                <h3>{props.title}</h3>
                <div className="work-link">
                    <a className="lightbox" href={props.src}><i className="fa fa-search"></i></a>
                </div>
            </div>
        </div>
    )
}

function NearbyArea() {
    return (
        <div id="nearby" className="section md-padding">

            <div className="container">
                <div className="row">
                    <div className="section-header text-center">
                        <h2 className="title"><GetLanguage vn="Khu vực lân cận" en="Nearby Area" /></h2>
                    </div>
                    {/* <NearbyImgCard src="./img/beach1.jpg" />
                    <NearbyImgCard src="./img/beach2.jpg" />
                    <NearbyImgCard src="./img/beach3.jpg" />
                    <NearbyImgCard src="./img/beach4.jpg" />
                    <NearbyImgCard src="./img/beach5.jpg" />
                    <NearbyImgCard src="./img/Phuochai12.jpg" />
                    <NearbyImgCard src="./img/phuochai12.jpg" /> */}
                    <div className="row">
                        <div className="col-md-3 col-sm-6 work">
                            <div className="property-card">
                                <a href="https://www.facebook.com/lanrungresort.phuochai/posts/998988086965236/" target="_blank">
                                    <div className="property-image" style={{ backgroundImage: "url('./img/elvis-coffee.jpg')" }}>
                                    </div></a>
                                <div className="property-description">
                                    <img style={{ width: "40px", height: "40px" }} src="./img/coffee-cup.png"></img>
                                    <h5> Elvis Coffee </h5>
                                    <p><GetLanguage vn="Cách 2.1 km" en="2.1km away" /></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 work">
                            <div className="property-card">
                                <a href="https://oceanami.com/am-thuc/maison-long-hai.html"  target="_blank">
                                    <div className="property-image" style={{ backgroundImage: "url('./img/maisonlonghai.jpg')" }}>
                                    </div></a>
                                <div className="property-description">
                                    <img style={{ width: "40px", height: "40px" }} src="./img/restaurant.png"></img>
                                    <GetLanguage
                                        vn={<>
                                            <h5>Nhà hàng Maison Long Hai</h5>
                                            <p>Cách 4,3 km</p>
                                        </>}
                                        en={<>
                                            <h5>Maison Long Hai</h5>
                                            <p>4,3km away</p>
                                        </>}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 work">
                            <div className="property-card">
                                <a href="https://www.tripadvisor.com/Attraction_Review-g303946-d8471987-Reviews-Minh_Dam_Bases-Vung_Tau_Ba_Ria_Vung_Tau_Province.html" target="_blank">
                                    <div className="property-image" style={{ backgroundImage: "url('./img/minhdam.jpg')" }}>
                                    </div></a>
                                <div className="property-description">
                                    <img style={{ width: "40px", height: "40px" }} src="./img/barracks.png"></img>
                                    <GetLanguage
                                        vn={<>
                                            <h5>Khu di tích lịch sử Minh Đạm</h5>
                                            <p>Cách 2,6 km</p>
                                        </>}
                                        en={<>
                                            <h5>Minh Dam Historical Monuments</h5>
                                            <p>2,6km away</p>
                                        </>}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 work">
                            <div className="property-card">
                                <a href="https://datdo.baria-vungtau.gov.vn/article?item=97e40a2bee9600db36e8db928a7c75fd" target="_blank">
                                    <div className="property-image" style={{ backgroundImage: "url('./img/deonuocngot.jpg')" }}>
                                    </div></a>
                                <div className="property-description">
                                    <img style={{ width: "40px", height: "40px" }} src="./img/waterfall.png"></img>
                                    <GetLanguage
                                        vn={<>
                                            <h5>Đèo Nước Ngọt</h5>
                                            <p>Cách 4,5 km</p>
                                        </>}
                                        en={<>
                                            <h5>Fresh water pass</h5>
                                            <p>4,5km away</p>
                                        </>}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-6 work">
                                <div className="property-card">
                                    <a href="https://www.traveloka.com/vi-vn/explore/destination/bien-long-hai-acc/159054" target="_blank">
                                        <div className="property-image" style={{ backgroundImage: "url('./img/Phuochai1.jpg')" }}>
                                        </div></a>
                                    <div className="property-description">
                                        <img style={{ width: "40px", height: "40px" }} src="./img/vacations.png"></img>
                                        <GetLanguage
                                            vn={<>
                                                <h5>Bãi biển Long Hải</h5>
                                                <p>Cách 4,3 km</p>
                                            </>}
                                            en={<>
                                                <h5>Long Hai Beach</h5>
                                                <p>4,3km away</p>
                                            </>}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 work">
                                <div className="property-card">
                                    <a href="https://dulichvietdu.com/cong-vien-dai-tuong-niem-vo-thi-sau/" target="_blank">
                                        <div className="property-image" style={{ backgroundImage: "url('./img/congvien-vts.jpg')" }}>
                                        </div></a>
                                    <div className="property-description">
                                        <img style={{ width: "40px", height: "40px" }} src="./img/park.png"></img>
                                        <GetLanguage
                                            vn={<>
                                                <h5>Công viên Võ Thị Sáu</h5>
                                                <p>Cách 8 km</p>
                                            </>}
                                            en={<>
                                                <h5>Võ Thị Sáu Park</h5>
                                                <p>8km away</p>
                                            </>}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 work">
                                <div className="property-card">
                                    <a href="https://www.tripadvisor.com.vn/Attraction_Review-g303946-d13454427-Reviews-The_Battle_of_Long_Tan-Vung_Tau_Ba_Ria_Vung_Tau_Province.html" target="_blank">
                                        <div className="property-image" style={{ backgroundImage: "url('./img/longtan.jpg')" }}>
                                        </div></a>
                                    <div className="property-description">
                                        <img style={{ width: "40px", height: "40px" }} src="./img/places-to-visit.png"></img>
                                        <GetLanguage
                                            vn={<>        
                                                <h5>Thập tự giá Long Tân</h5>
                                                <p>Cách 15 km</p>
                                            </>}
                                            en={<>
                                                <h5>Long Tân Cross</h5>
                                                <p>15km away</p>
                                            </>}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 work">
                                <div className="property-card">
                                    <a href="#">
                                        <div className="property-image" style={{ backgroundImage: "url('./img/sanbay.jpg')" }}>
                                        </div></a>
                                    <div className="property-description">
                                        <img style={{ width: "40px", height: "40px" }} src="./img/airport.png"></img>
                                        <GetLanguage
                                            vn={<>
                                                <h5>Sân bay Vũng Tàu</h5>
                                                <p>Cách 20 km</p>
                                            </>}
                                            en={<>
                                                <h5>Vũng Tàu Airport</h5>
                                                <p>20km away</p>
                                            </>}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NearbyArea;