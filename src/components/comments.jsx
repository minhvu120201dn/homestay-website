import React from "react";

function CommentCard(props) {
    return (
        <div className="col-sm-4">
            <div className="team">
                <div className="team-img">
                    <img className="img-responsive" src={props.src} style={{ height:"350px" }} alt="" />
                    <div className="overlay">
                        <div className="team-social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-google-plus"></i></a>
                        </div>
                    </div>
                </div>
                <div className="team-content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

function Comments() {
    return (
        <div id="comments" className="section md-padding">

            <div className="container">

                <div className="row">

                    <div className="section-header text-center">
                        <h2 className="title">Cảm nhận của du khách</h2>
                    </div>

                    <CommentCard src="./img/team1.jpg">
                        <h3>Diễm Hoàng sỉn rượu</h3>
                        <p> Homestay tuyệt vời! Chúng tôi đã có một kỳ nghỉ thật đáng
                            nhớ ở đây. Gia đình chủ nhà rất thân thiện và chào đón. Không gian
                            homestay ấm cúng, sạch sẽ và đầy đủ tiện nghi. Chắc chắn sẽ quay lại vào
                            lần tới!
                        </p>
                    </CommentCard>

                    <CommentCard src="./img/team2.jpg">
                        <h3>Cũng là Diễm Hoàng nhưng mà lạ lắm :))</h3>
                        <p> Homestay ấm cúng với không gian xanh mướt và yên bình. Đến
                            đây, chúng tôi cảm nhận được sự yên tĩnh và thanh bình.
                            Chủ nhà rất quan tâm và luôn chia sẻ những câu chuyện thú vị về địa
                            phương.
                        </p>
                    </CommentCard>

                    <CommentCard src="./img/team3.jpg">
                        <h3>Khánh An</h3>
                        <p> Homestay nằm ở vị trí lý tưởng, chỉ cách các điểm
                            tham quan chính trong khu vực vài phút đi bộ. Chúng tôi đã được trải
                            nghiệm cuộc sống thôn quê truyền thống và thưởng thức các món ăn địa
                            phương tuyệt vời.
                        </p>
                    </CommentCard>

                </div>

            </div>

        </div>
    )
}

export default Comments;