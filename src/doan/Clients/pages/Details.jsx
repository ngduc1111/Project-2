import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Details() {
    let { id } = useParams();
    const [listsp, ganspCT] = useState([]);
    const [sanphamView, ganspView] = useState([]);
    const [comments, setComments] = useState([]);
    const [noiDung, setNoiDung] = useState("");
    const [isPopupVisible, setPopupVisible] = useState(false); // State quản lý popup
    const [bookingInfo, setBookingInfo] = useState({
        name: "",
        email: "",
        sdt: "",
        name_room: ""
    });

    // Fetch dữ liệu sản phẩm chi tiết
    useEffect(() => {
        let url = `http://localhost:3000/sp_detail/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => ganspCT(data));
    }, [id]);

    // Fetch sản phẩm liên quan
    useEffect(() => {
        fetch("http://localhost:3000/spView")
            .then((res) => res.json())
            .then((data) => ganspView(data));
    }, []);

    // Fetch bình luận
    const fetchComments = async () => {
        try {
            const response = await axios.get("http://localhost:3000/comments");
            if (Array.isArray(response.data)) {
                setComments(response.data);
            } else {
                console.error("Dữ liệu trả về không phải là mảng:", response.data);
            }
        } catch (error) {
            console.error("Lỗi khi lấy danh sách bình luận:", error);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);

    // Thêm bình luận mới
    const handleAddComment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/comments", {
                noi_dung: noiDung,
            });
            setComments([
                ...comments,
                { id: response.data.id, noi_dung: noiDung, thoi_gian: new Date() },
            ]);
            toast.success('Bình luận thành công!');
            setNoiDung("");
        } catch (error) {
            console.error("Lỗi khi thêm bình luận:", error);
        }
    };

    // Mở và đóng popup
    const openPopup = () => setPopupVisible(true);
    const closePopup = () => setPopupVisible(false);

    // Xử lý thay đổi input khi người dùng nhập thông tin đặt Hàng
    const handleBookingInputChange = (e) => {
        setBookingInfo({ ...bookingInfo, [e.target.name]: e.target.value });
    };


    // Xử lý khi người dùng nhấn xác nhận đặt Hàng
    const handleBookingSubmit = (e) => {
        e.preventDefault();
        // Gửi thông tin đặt Hàng lên server (bằng Axios)
        axios.post('http://localhost:3000/api/booking', bookingInfo)
            .then((response) => {
                console.log('Đặt Hàng thành công:', response.data);
                toast.success('Đặt Hàng thành công!');
                setBookingInfo({ name: "", email: "", sdt: "", name_room: "" }); // Reset form
            })
            .catch((error) => {
                console.error('Có lỗi xảy ra khi đặt Hàng:', error);
                toast.error('Đặt Hàng thất bại!');
            });
    };


    return (
        <div>
            <ToastContainer />
            <div class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div style={{ marginRight: "856px" }} class="breadcrumb__links">
                                <Link to={"/"}><i class="fa fa-home"></i> Home</Link>
                                <Link style={{ color: "#212529" }} to={"/"}><a href="/" >Chi Tiết</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="anime-details spad">
                <div class="container">
                    <div class="anime__details__content">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="anime__details__pic set-bg" style={{ backgroundImage: `url(${listsp.hinh})` }}>
                                    <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                    <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="anime__details__text">
                                    <div class="anime__details__title">
                                        <h3>{listsp.ten_sp}</h3>
                                        {/* <span>フェイト／ステイナイト, Feito／sutei naito</span> */}
                                    </div>
                                    <div class="anime__details__rating">
                                        <div class="rating">
                                            <a href="/#"><i class="fa fa-star"></i></a>
                                            <a href="/#"><i class="fa fa-star"></i></a>
                                            <a href="/#"><i class="fa fa-star"></i></a>
                                            <a href="/#"><i class="fa fa-star"></i></a>
                                            <a href="/#"><i class="fa fa-star-half-o"></i></a>
                                        </div>
                                        <span>1.029 Sao</span>
                                    </div>
                                    <p>{listsp.mo_ta}</p>
                                    <div class="anime__details__widget">
                                        <p>Giá : <strong style={{ color: "#19ff19" }}>{listsp.gia} $</strong> </p>
                                        <p>Ngày Bán : {listsp.ngay}</p>
                                    </div>
                                    <div
                                        className="anime__details__btn"
                                        style={{ marginRight: "-4px", marginTop: "217px" }}
                                    >
                                        <button  onClick={openPopup} className="watch-btn ">
                                            <span>Đặt Hàng</span> <i className="fa fa-angle-right"></i>
                                        </button>
                                    </div>
                                    {/* Popup Modal */}
                                    {isPopupVisible && (
                                        <div
                                            style={{
                                                position: "fixed",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                zIndex: 1000,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    background: "white",
                                                    padding: "20px",
                                                    borderRadius: "10px",
                                                    width: "400px",
                                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                                }}
                                            >
                                                <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Nhập Thông Tin Đặt Hàng</h3>
                                                <form onSubmit={handleBookingSubmit}>
                                                    <div style={{ marginBottom: "10px" }}>
                                                        <label htmlFor="name">Họ và Tên:</label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            value={bookingInfo.name}
                                                            onChange={handleBookingInputChange}
                                                            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                                                            required
                                                        />
                                                    </div>
                                                    <div style={{ marginBottom: "10px" }}>
                                                        <label htmlFor="phone">Số Điện Thoại:</label>
                                                        <input
                                                            type="number"
                                                            id="sdt"
                                                            name="sdt"
                                                            value={bookingInfo.sdt}
                                                            onChange={handleBookingInputChange}
                                                            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                                                            
                                                        />
                                                    </div>
                                                    <div style={{ marginBottom: "10px" }}>
                                                        <label htmlFor="email">Email:</label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            value={bookingInfo.email}
                                                            onChange={handleBookingInputChange}
                                                            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                                                            required
                                                        />
                                                    </div>
                                                    <div style={{ marginBottom: "10px" }}>
                                                        <label htmlFor="email">Tên Hàng:</label>
                                                        <input
                                                            type="text"
                                                            id="name_room"
                                                            name="name_room"
                                                            value={bookingInfo.name_room}
                                                            onChange={handleBookingInputChange}
                                                            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                                                            required
                                                        />
                                                    </div>
                                                    
                                                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                                                        <button type="submit" className="btn btn-primary">Xác Nhận</button>
                                                        <button
                                                            type="button"
                                                            onClick={closePopup}
                                                            className="btn btn-secondary"
                                                            style={{ marginLeft: "10px" }}
                                                        >
                                                            Hủy
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 col-md-8">
                            <div class="anime__details__review">
                                <div style={{ marginRight: "650px" }} class="section-title">
                                    <h5>Nhận Xét</h5>
                                </div>
                                {Array.isArray(comments) && comments.length > 0 ? (
                                    comments.map((comment) => (
                                        <div class="anime__review__item" key={comment.id}>
                                            <div class="anime__review__item__pic">
                                                <img src="../img/anime/review-1.jpg" alt="" />
                                            </div>
                                            <div class="anime__review__item__text">
                                                <li style={{ color: "#fff", listStyle: "none", display: "flex" }}>
                                                    {comment.noi_dung} <br />
                                                </li>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>Chưa có bình luận nào.</p> // Thêm thông báo khi không có bình luận
                                )}

                            </div>
                            <div class="anime__details__form">
                                <div style={{ marginRight: "610px" }} class="section-title">
                                    <h5>Bình Luận</h5>
                                </div>
                                <form onSubmit={handleAddComment} action="/#">
                                    <textarea style={{ color: "#000000" }} value={noiDung} onChange={(e) => setNoiDung(e.target.value)} required placeholder="Bình luận"></textarea>
                                    <button style={{ marginRight: "650px" }} type="submit"><i class="fa fa-location-arrow"></i> Nhấn !</button>
                                </form>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4">
                            {
                                sanphamView.slice(0, 2).map((sanpham, index) =>
                                    <div key={index} class="anime__details__sidebar">

                                        <div style={{ marginRight: "200px" }} class="section-title">
                                            <h5>Bạn sẽ thích...</h5>
                                        </div>
                                        <div class="product__sidebar__view__item set-bg" style={{ backgroundImage: `url(${sanpham.hinh})` }}>
                                            <div class="ep">18 / ?</div>
                                            <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                            <Link to={"/details/" + sanpham.id}> <h5><a href="/#">{sanpham.ten_sp}</a></h5></Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Details
