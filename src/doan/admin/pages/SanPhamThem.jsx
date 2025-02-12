
// import React from 'react';
// import { Link,useNavigate  } from 'react-router-dom';

// function SanPhamThem() {
//     const navigate = useNavigate();
//     let sp = {};
//     const submitDuLieu = () => {
//         let url = `http://localhost:3000/admin/sp`;
//         let opt = {
//             method: "post",
//             body: JSON.stringify(sp),
//             headers: { 'Content-Type': 'application/json' }
//         };
//         fetch(url, opt)
//             .then(res => res.json())
//             .then(data => {
//                 alert("đã thêm thành công", JSON.stringify(data))
                
//             })
//     }

//     return (
//         <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f0f0f0' }} className="bodyAdmin">
//             <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px", border: "double", borderRadius: "10px" }}>
//                 <Link to={"/admin"}>
//                     <h3 style={{ textAlign: "center" }}><strong>Admin</strong></h3>
//                 </Link>
//                 <hr className="sidebar-divider" />
//                 <ul className="nav nav-pills flex-column mb-auto">
//                     <li className="nav-item">
                       
//                             <Link to={"/admin"}> <strong style={{ color: "white" }} >Trang Chủ</strong></Link>
                      
//                     </li>
//                     <li>
                        
//                             <Link to={"/admin/themSp"}><strong className='strong' style={{ color: "black" }}>Sản Phẩm</strong></Link>
                      
//                     </li>
//                     <li>
//                        <Link to={"/admin/sp"}><strong className='strong' style={{ color: "black" }}>Chi Tiết</strong></Link>
//                     </li>
//                     <li>
//                         <a href="/#" className="nav-link text-white">
//                             <strong className='strong' style={{ color: "black" }}>Người Dùng</strong>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="/#" className="nav-link text-white">
//                             <strong className='strong' style={{ color: "black" }}>Cài Đặt</strong>
//                         </a>
//                     </li>
//                 </ul>
//                 <hr className="sidebar-divider" />

//                 <div className="dropdown">
//                     <a href="/#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//                         <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
//                         <strong style={{ color: "black" }}>Mạnh Tường</strong>
//                     </a>
//                 </div>
//             </div>


            
//         {/* <form id='frmaddsp'>
//           <h2> Thêm Sản Phẩm</h2>

//           <div className='row mb-3'>
//               <div className='col text-white'>Tên SP <input type='text' className='form-control' onChange={e => sp.ten_sp = e.target.value}></input></div>
//               <div className='col text-white'>Gia <input type='number' className='form-control' onChange={e => sp.gia = e.target.value}></input></div>
//               <div className='col text-white'>Gia KM <input type='number' className='form-control' onChange={e => sp.gia_km = e.target.value}></input></div>
//               <div className='col text-white'>ID loại<input type='number' className='form-control' onChange={e => sp.id_loai = e.target.value}></input></div>
//               <div className='col text-white'>Tính chât<input type='number' className='form-control' onChange={e => sp.tinh_chat = e.target.value}></input></div>
//           </div>
//               <div className='row mb-3'>
//                   <div className='col text-white'>Hình SP <input type='text' className='form-control' onChange={e => sp.hinh = e.target.value}></input></div>
//                   <div className='col text-white'>Ngày <input type='date' className='form-control' onChange={e => sp.ngay = e.target.value}></input></div>
//                   <div className='col text-white'>Lượt Xem <input type='number' className='form-control' onChange={e => sp.luot_xem = e.target.value}></input></div>
//               </div>
//               <div className='mb-3'>
//               <button onClick={ () => submitDuLieu()}  className='btn btn-warning' type='button'>Thêm Sản Phẩm</button> &nbsp;
//               <Link to={"/admin/sp"}> <a className='btn btn-success' href="/">Danh Sách</a> </Link>
//               </div>
    
//         </form> */}


//             <div className="form-container d-flex justify-content-center align-items-center" style={{ flex: 1 }}>
//                 <div className="form-wrapper row" style={{ width: '80%', maxWidth: '900px', backgroundColor: '#0b0c2a', padding: '20px', borderRadius: '10px' }}>
//                     <div className="col-md-6" style={{ paddingRight: '15px', backgroundColor: 'white', borderRadius: '5px', overflowY: 'auto', maxHeight: '70vh' }}>
//                         <h3>Thêm Sản Phẩm</h3>
//                         <form>
//                             <div className="form-group">
//                                 <label htmlFor="tenSp">Tên Sản Phẩm</label>
//                                 <input type="text" className="form-control"  id="tenSp" placeholder="Nhập tên sản phẩm" onChange={e => sp.ten_sp = e.target.value} />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="gia">Giá</label>
//                                 <input type="text" className="form-control" id="gia" placeholder="Nhập giá sản phẩm" onChange={e => sp.gia = e.target.value} />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="giaKm">Giá Khuyến Mãi</label>
//                                 <input type="text" className="form-control" id="giaKm" placeholder="Nhập giá khuyến mãi"  onChange={e => sp.gia_km = e.target.value} />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="idLoai">ID Loại</label>
//                                 <input type="text" className="form-control" id="idLoai" placeholder="Nhập ID loại"  onChange={e => sp.id_loai = e.target.value}  />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="tinhChat">Tính Chất</label>
//                                 <input type="text" className="form-control" id="tinhChat" placeholder="Nhập tính chất sản phẩm"  onChange={e => sp.tinh_chat = e.target.value} />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="hinhSp">Hình Sản Phẩm</label>
//                                 <input type="file" className="form-control" id="hinhSp" onChange={e => sp.hinh = e.target.value} />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="ngay">Ngày</label>
//                                 <input type="date" className="form-control" id="ngay" onChange={e => sp.ngay = e.target.value} />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="luotXem">Lượt Xem</label>
//                                 <input type="number" className="form-control" id="luotXem" placeholder="Nhập lượt xem"  onChange={e => sp.luot_xem = e.target.value}/>
//                             </div>
//                             <button  onClick={ () => submitDuLieu()} type="submit" className="btn btn-primary btn-block">Thêm Sản Phẩm</button>
//                         </form>
//                     </div>

//                     <div className="col-md-6" style={{ paddingLeft: '15px', backgroundColor: 'white', borderRadius: '5px', overflowY: 'auto', maxHeight: '70vh' }}>
//                         <h3>Thêm Danh Mục</h3>
//                         <form>
//                             <div className="form-group">
//                                 <label htmlFor="tenDanhMuc">Tên Danh Mục</label>
//                                 <input type="text" className="form-control" id="tenDanhMuc" placeholder="Nhập tên danh mục" />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="idDanhMuc">ID Danh Mục</label>
//                                 <input type="text" className="form-control" id="idDanhMuc" placeholder="Nhập ID danh mục" />
//                             </div>
//                             <button type="submit" className="btn btn-success btn-block">Thêm Danh Mục</button>
//                         </form>
//                     </div>



//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SanPhamThem;



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SanPhamThem() {
    const navigate = useNavigate();
    const [sp, setSp] = useState({
        ten_sp: '',
        gia: '',
        gia_km: '',
        id_loai: '',
        tinh_chat: '',
        hinh: '', // Thay đổi để lưu trữ link ảnh thay vì file
        ngay: '',
        luot_xem: '',
        mo_ta: '' // Thêm trường mô tả sản phẩm
    });
    const [loaiList, setLoaiList] = useState([]);

    useEffect(() => {
        // Gọi API để lấy dữ liệu loại sản phẩm
        fetch('http://localhost:3000/loai')
            .then(res => res.json())
            .then(data => {
                setLoaiList(data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy dữ liệu loại:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setSp(prevState => ({
            ...prevState,
            [id]: value // Cập nhật state cho từng trường
        }));
    };

    const submitDuLieu = (e) => {
        e.preventDefault();

        let url = `http://localhost:3000/admin/sp`;
        let opt = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sp)
        };

        fetch(url, opt)
            .then(res => res.json())
            .then(data => {
                alert("Đã thêm sản phẩm thành công");
                navigate('/admin/sp');
            })
            .catch(error => {
                console.error('Lỗi khi thêm sản phẩm:', error);
            });
    };

    return (
        <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f0f0f0' }} className="bodyAdmin">
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px", border: "double", borderRadius: "10px" }}>
                <Link to={"/admin"}>
                    <h3 style={{ textAlign: "center" }}><strong>Admin</strong></h3>
                </Link>
                <hr className="sidebar-divider" />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to={"/admin"}> <strong style={{ color: "white" }}>Trang Chủ</strong></Link>
                    </li>
                    <li>
                        <Link to={"/admin/themSp"}><strong className='strong' style={{ color: "black", marginLeft:"16px" }}>Sản Phẩm</strong></Link>
                    </li>
                    <li>
                        <Link to={"/admin/sp"}><strong className='strong' style={{ color: "black", marginLeft:"16px" }}>Chi Tiết</strong></Link>
                    </li>
                    <li>
                        <a href="/#" className="nav-link text-white">
                            <strong className='strong' style={{ color: "black" }}>Người Dùng</strong>
                        </a>
                    </li>
                    <li>
                        <a href="/#" className="nav-link text-white">
                            <strong className='strong' style={{ color: "black" }}>Cài Đặt</strong>
                        </a>
                    </li>
                </ul>
                <hr className="sidebar-divider" />
                <div className="dropdown">
                    <a href="/#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong style={{ color: "black" }}>Admin</strong>
                    </a>
                </div>
            </div>

            <div className="form-container d-flex justify-content-center align-items-center" style={{ flex: 1 }}>
                <div className="form-wrapper row" style={{ width: '80%', maxWidth: '900px', backgroundColor: '#0b0c2a', padding: '20px', borderRadius: '10px' }}>
                    <div className="col-md-6" style={{ paddingRight: '15px', backgroundColor: 'white', borderRadius: '5px', overflowY: 'auto', maxHeight: '70vh' }}>
                        <h3>Thêm Sản Phẩm</h3>
                        <form onSubmit={submitDuLieu}>
                            <div className="form-group">
                                <label htmlFor="ten_sp">Tên Sản Phẩm</label>
                                <input type="text" className="form-control" id="ten_sp" placeholder="Nhập tên sản phẩm" value={sp.ten_sp} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gia">Giá</label>
                                <input type="text" className="form-control" id="gia" placeholder="Nhập giá sản phẩm" value={sp.gia} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gia_km">Giá Khuyến Mãi</label>
                                <input type="text" className="form-control" id="gia_km" placeholder="Nhập giá khuyến mãi" value={sp.gia_km} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="id_loai">Chọn Loại</label>
                                <select id="id_loai" className="form-control" value={sp.id_loai} onChange={handleChange}>
                                    <option value="">Chọn loại sản phẩm</option>
                                    {loaiList.map(loai => (
                                        <option key={loai.id} value={loai.id}>{loai.ten_loai}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="tinh_chat">Tính Chất</label>
                                <input type="text" className="form-control" id="tinh_chat" placeholder="Nhập tính chất sản phẩm" value={sp.tinh_chat} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="hinh">Link Hình Ảnh</label>
                                <input type="text" className="form-control" id="hinh" placeholder="Nhập link hình ảnh" value={sp.hinh} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ngay">Ngày</label>
                                <input type="date" className="form-control" id="ngay" value={sp.ngay} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="luot_xem">Lượt Xem</label>
                                <input type="number" className="form-control" id="luot_xem" placeholder="Nhập lượt xem" value={sp.luot_xem} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mo_ta">Mô Tả</label>
                                <textarea className="form-control" id="mo_ta" placeholder="Nhập mô tả sản phẩm" value={sp.mo_ta} onChange={handleChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Thêm Sản Phẩm</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SanPhamThem;
