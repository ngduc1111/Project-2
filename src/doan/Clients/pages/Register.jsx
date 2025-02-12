import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // Thêm state để lưu thông báo
    const navigate = useNavigate(); // Khởi tạo navigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { name, email, phone, address, password };

        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                // Đăng ký thành công
                setMessage('Đăng ký thành công!'); // Thiết lập thông báo thành công
                setTimeout(() => {
                    navigate('/login'); // Chuyển hướng về trang chủ sau 2 giây
                }, 2000);
            } else {
                // Xử lý lỗi
                setMessage(data.msg); // Hiển thị thông báo lỗi
                console.error('Lỗi:', data.msg);
            }
        } catch (error) {
            console.error('Lỗi khi gửi yêu cầu:', error);
            setMessage('Đã xảy ra lỗi, vui lòng thử lại!');
        }
    };

    return (
        <div>
            <section className="normal-breadcrumb set-bg" data-setbg="img/normal-breadcrumb.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="normal__breadcrumb__text">
                                <h2>Đăng Ký</h2>
                                <p>Chào Mừng Bạn Đến Với Thế Giới Anime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ marginTop: "-135px" }} className="login spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login__form">
                                <h3 style={{ marginLeft: "-30px" }}>Đăng Ký</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="input__item">
                                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Nhập Tên ..." required />
                                    </div>
                                    <div className="input__item">
                                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Nhập Email ..." required />
                                        <span className="icon_mail"></span>
                                    </div>
                                    <div className="input__item">
                                        <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" placeholder="Nhập Số Điện Thoại ..." required />
                                    </div>
                                    <div className="input__item">
                                        <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" placeholder="Nhập Địa Chỉ ..." required />
                                    </div>
                                    <div className="input__item">
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật Khẩu ..." required />
                                        <span className="icon_lock"></span>
                                    </div>
                                    <button style={{ marginLeft: "-25px" }} type="submit" className="site-btn">Đăng Ký Ngay !</button>
                                </form>
                                {message && <p>{message}</p>} {/* Hiển thị thông báo */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login__register">
                                <h3>Bạn Đã Có Tài Khoản ?</h3>
                                <a href="/#" className="primary-btn">Đăng Nhập Ngay !</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
