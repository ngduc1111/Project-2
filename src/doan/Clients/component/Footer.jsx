import React from 'react'

function Footer() {
  return (
    <footer class="footer">
    <div class="page-up">
        <a href="/#" id="scrollToTopButton"><span class="arrow_carrot-up"></span></a>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="footer__logo">
                    <a href="./index.html"><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/fbab4f587da2242fbe9858fe3e5ba717.svg" alt=""/></a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="footer__nav">
                    <ul>
                        <li class="active"><a href="./index.html">Trang Chủ</a></li>
                        <li><a href="./categories.html">Danh Mục</a></li>
                        <li><a href="./blog.html">Thông Tin</a></li>
                        <li><a href="/#">Liên Hệ</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3">
                <p>Trong khoảnh khắc đầu tiên của bình minh, khi ánh sáng dịu dàng lan tỏa, cuộc sống như bừng tỉnh với những hi vọng mới, hứa hẹn mang lại những điều kỳ diệu đầy bất ngờ. </p>

              </div>
          </div>
      </div>
      <div class="search-model">
    <div class="h-100 d-flex align-items-center justify-content-center">
        <div class="search-close-switch"><i class="icon_close"></i></div>
        <form class="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....."/>
        </form>
    </div>
</div>
  </footer>


  )
}

export default Footer
