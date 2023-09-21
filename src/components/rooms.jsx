import React from 'react';

import { GetLanguage } from './utils';

function RoomImgCard(props) {
    return (
        <div className="col-md-4 col-xs-6 work">
            <img className="img-responsive" src={props.src} alt="" style={{ height: '350px' }} />
            <div className="overlay"></div>
            <div className="work-content">
                <h3>{props.children}</h3>
                <div className="work-link">
                    <a className="lightbox" href={props.src}><i className="fa fa-search"></i></a>
                </div>
            </div>
        </div>
    )
}

function Rooms() {
    return (
        <div id="rooms" className="section md-padding bg-grey">
            <div className="container">
                <div className="row">
                    <div className="section-header text-center">
                        <h2 className="title">
                            <GetLanguage vn="Không gian phòng" en="Room" />
                        </h2>
                    </div>
                    <RoomImgCard src="./img/phongkhach1.jpg">
                        <GetLanguage vn="Phòng khách" en="Living room"/>
                    </RoomImgCard>

                    <RoomImgCard src="./img/phongkhach2.jpg">
                        <GetLanguage vn="Phòng khách" en="Living room"/>
                    </RoomImgCard>

                    <RoomImgCard src="./img/phongkhach3.jpg">
                        <GetLanguage vn="Phòng khách" en="Living room"/>
                    </RoomImgCard>

                    <RoomImgCard src="./img/room1.jpg">
                        <GetLanguage vn="Phòng ngủ" en="Bedroom"/>
                    </RoomImgCard>

                    <RoomImgCard src="./img/room2.jpg">
                        <GetLanguage vn="Phòng ngủ" en="Bedroom"/>
                    </RoomImgCard>

                    <RoomImgCard src="./img/room3.jpg">
                        <GetLanguage vn="Phòng ngủ" en="Bedroom"/>
                    </RoomImgCard>

                    <RoomImgCard src="./img/vesinh1.jpg">
                        <GetLanguage vn="Phòng tắm" en="Bathroom"/>
                    </RoomImgCard>

                    <RoomImgCard src="./img/vesinh2.jpg">
                        <GetLanguage vn="Phòng tắm" en="Bathroom"/>
                    </RoomImgCard>

                    <RoomImgCard src="./img/vesinh3.jpg">
                        <GetLanguage vn="Phòng tắm" en="Bathroom"/>
                    </RoomImgCard>
                </div>
            </div>
        </div>
    );
}

export default Rooms;