import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate()
  const handleSearch = (e) => {
      e.preventDefault();
      navigate(`/search?q=${searchTerm}`);
  };

  const [showLoai, Ganloai] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/loai")
    .then(res => res.json())
    .then(data => Ganloai(data))
  },[])

  return (

 
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="header__logo">
             <Link to={"/"}>
             <img style={{borderRadius:"10px" , height:"60px" }} src="https://dareu.com.vn/wp-content/uploads/2021/01/dareulogo.png" alt="" />
             </Link>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="header__nav">
              <nav class="header__menu mobile-menu">
                <ul style={{marginTop:"20px"}}>
                <li class="active"><Link to={"/"}>Trang Chủ</Link></li>
                  <li><Link to={"/"}>Danh Mục</Link>
                    <ul class="dropdown">
                      {
                        showLoai.map((cate, index) => 
                         <li key={index}><Link to={"/categories/" + cate.id}>{cate.ten_loai}</Link></li>
                        )
                      }
                    </ul>
                  </li>
                  <form style={{ display:"contents"}} onSubmit={handleSearch}>
                <input style={{height:"46px",border:"none",padding:"20px"}}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Tìm kiếm ở đây..."
                />
                <button className='btn-btn  text-white p-2' style={{border:"none",height:"46px",backgroundColor:"#e53637"}} type="submit">Tìm !</button>
            </form>
                  
          
           
                </ul>

              </nav>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="header__right">
              <Link to={"/login"}><a href="./login.html"><span class="icon_profile"></span></a></Link>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
 
  )
}

export default Menu
