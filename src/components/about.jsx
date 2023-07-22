import React from 'react';

function RoomCard(props) {
    return (
        <div className="col-md-3">
            <div className="about" style={{ height: '340px' }}>
                <img style={{ width: '50px', height: '50px' }} src={props.src}></img>
                {props.children}
            </div>
        </div>
    );
}

function About() {
    return (
        <div id="about" className="section md-padding">

            <div className="container">

                <div className="row">

                    <div className="section-header text-center">
                        <h2 className="title">Giới thiệu</h2>
                    </div>

                    <RoomCard src="./img/sofa.png">
                        <h3>Phòng khách</h3>
                        <p>Phòng khách mang phong cách vintage - không gian cổ điển với sofa êm ái, bàn trà gỗ, và những bức tranh hoa văn tinh tế.</p>
                    </RoomCard>

                    <RoomCard src="./img/bed.png">
                        <h3>Phòng ngủ</h3>
                        <p>Homestay với 4 phòng ngủ, trong đó có 2 phòng đôi và 2 phòng có 2 giường đơn.</p>
                    </RoomCard>

                    <RoomCard src="./img/shower.png">
                        <h3>Phòng tắm</h3>
                        <p>Homestay tiện nghi với 3 nhà vệ sinh, mỗi phòng được thiết kế sang trọng và hiện đại, đảm bảo cung cấp không gian tối ưu cho sự riêng tư và thoải mái của du khách.</p>
                    </RoomCard>

                    <RoomCard src="./img/sea-waves.png">
                        <h3>Bãi biển</h3>
                        <p>Homestay chỉ cách bãi tắm 150m đi bộ, là môi trường lý tưởng cho những chuyến du lịch nghỉ dưỡng.</p>
                    </RoomCard>

                </div>

            </div>

        </div>
    );
}

export default About;