import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post('http://localhost:3000/api/login', { email, password });
          const { token } = res.data;
          const decoded = jwtDecode(token);
    
          if (decoded.role === 1) {
             navigate('/admin');
          } else {
             navigate('/');
          }
        } catch (error) {
          console.error(error);
          alert('Đăng nhập thất bại');
        }
      };
  return (
    <div>
    <section class="normal-breadcrumb set-bg" data-setbg="img/normal-breadcrumb.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="normal__breadcrumb__text">
                        <h2>Đăng Nhập</h2>
                        <p>Chào Mừng Bạn Đến Với Thế Giới Anime.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section style={{marginTop:"-135px"}} class="login spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="login__form">
                        <h3 style={{marginLeft:"-30px"}}>Đăng Nhập</h3>
                        <form  onSubmit={handleSubmit} action="/#">
                            <div class="input__item">
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Nhập Email ..."/>
                                <span class="icon_mail"></span>
                            </div>
                            <div class="input__item">
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật Khẩu ..."/>
                                <span class="icon_lock"></span>
                            </div>
                            <button style={{marginLeft:"-25px"}} type="submit" class="site-btn">Đăng Nhập Ngay !</button>
                        </form>
                        <a style={{marginBottom:"-45px",marginRight:"100px"}} href="/#" class="forget_pass">Quên mật khẩu ?</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="login__register">
                        <h3>Bạn Chưa Có Tài Khoản ?</h3>
                        <Link to={"/register"}><button style={{marginLeft:"-25px"}} type="submit" class="site-btn">Đăng Ký Ngay !</button></Link>
                    </div>
                </div>
            </div>
            <div class="login__social">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-6">
                        <div class="login__social__links">
                            <span>or</span>
                            <ul>
                                <li><a href="/#" class="facebook"><i class="fa fa-facebook"></i> Đăng Nhập Với
                                Facebook</a></li>
                                <li><a href="/#" class="google"><i class="fa fa-google"></i> Đăng Nhập Với Google</a></li>
                                <li><a href="/#" class="twitter"><i class="fa fa-twitter"></i> Đăng Nhập Với Twitter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>s
    </div>
  )
}

export default Login
