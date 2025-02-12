import React from 'react'

function Infor() {
  return (
    <section class="anime-details spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="anime__video__player">
                    <video id="player" playsinline controls data-poster="./videos/anime-watch.jpg">
                        <source src="videos/1.mp4" type="video/mp4" />
                        <track kind="captions" label="English captions" src="/#" srclang="en" default />
                    </video>
                </div>
                <div class="anime__details__episodes">
                    <div>
                        <h5>List Name</h5>
                    </div>
                    <a href="/#">Ep 01</a>
                    <a href="/#">Ep 02</a>
                    <a href="/#">Ep 03</a>
                    <a href="/#">Ep 04</a>
                    <a href="/#">Ep 05</a>
                    <a href="/#">Ep 06</a>
                    <a href="/#">Ep 07</a>
                    <a href="/#">Ep 08</a>
                    <a href="/#">Ep 09</a>
                    <a href="/#">Ep 10</a>
                    <a href="/#">Ep 11</a>
                    <a href="/#">Ep 12</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8">
                <div class="anime__details__review">
                    <div class="section-title">
                        <h5 style={{display:"flex"}}>Nhận Xét</h5>
                    </div>
                    <div class="anime__review__item">
                        <div class="anime__review__item__pic">
                            <img src="img/anime/review-1.jpg" alt=""/>
                        </div>
                        <div class="anime__review__item__text">
                            <h6>Mạnh Tường - <span>1 Tiếng Trước</span></h6>
                            <p>Thật hay bài tôi thích nhất có lẻ là Counting Stars </p>
                        </div>
                    </div>
                </div>
                <div class="anime__details__form">
                    <div class="section-title">
                        <h5 style={{display:"flex"}}>Bình Luận</h5>
                    </div>
                    <form action="/#">
                        <textarea placeholder="Bình Luận của bạn"></textarea>
                        <button type="submit"><i class="fa fa-location-arrow"></i> Review</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Infor
