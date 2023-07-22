import React from "react";

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
        <div id="team" className="section md-padding">

            <div className="container">
                <div className="row">
                    <div className="section-header text-center">
                        <h2 className="title">Khu vực lân cận</h2>
                    </div>
                    <NearbyImgCard src="./img/beach1.jpg" />
                    <NearbyImgCard src="./img/beach2.jpg" />
                    <NearbyImgCard src="./img/beach3.jpg" />
                    <NearbyImgCard src="./img/beach4.jpg" />
                    <NearbyImgCard src="./img/beach5.jpg" />
                    <NearbyImgCard src="./img/Phuochai12.jpg" />
                    <NearbyImgCard src="./img/phuochai12.jpg" />
                </div>
            </div>

        </div>
    )
}

export default NearbyArea;