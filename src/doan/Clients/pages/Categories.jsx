import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Categories() {
    let { id_loai } = useParams();
    const [list_sp, ganListSP] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/sptrongloai/${id_loai}`)
            .then(res => res.json()).then(data => ganListSP(data));
    }, [id_loai]);

    const [spmoi, layspmoi] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/spmoi")
        .then(res => res.json())
        .then(data => layspmoi(data))
    })

  return (
 <div>
    <div class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div style={{marginLeft:"-900px"}} class="breadcrumb__links">
                        <a href="./index.html"><i class="fa fa-home"></i> Trang Chủ</a>
                        <a href="./categories.html">Danh Mục</a>
                    </div>
                </div>
            </div>
        </div>
        <section class="product-page spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="product__page__content">
                        <div class="product__page__title">
                            <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-6">
                                    <div class="section-title">
                                   
                                                <h4  style={{display:"flex"}}>Danh Mục</h4>
                                          
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6">
                                    <div class="product__page__filter">
                                        <p>Lọc Hàng</p>
                                        <select>
                                            <option value="">A-Z</option>
                                            <option value="">1-10</option>
                                            <option value="">10-50</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            {
                                list_sp.map((sanpham,index)=>
                                    <div key={index} class="col-lg-4 col-md-6 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg"  style={{backgroundImage:`url(${sanpham.hinh})`}}>
                                        <div class="ep">18 / 18</div>
                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div class="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                       <Link to={"/details/" + sanpham.id}> <h5><a href="/#">{sanpham.ten_sp}</a></h5></Link>
                                    </div>
                                </div>
                            </div>
                                )
                            }
                          
                        </div>
                    </div>
                    <div class="product__pagination">
                        <a href="/#" class="current-page">1</a>
                        <a href="/#">2</a>
                        <a href="/#">3</a>
                        <a href="/#">4</a>
                        <a href="/#">5</a>
                        <a href="/#"><i class="fa fa-angle-double-right"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <div class="product__sidebar">
                        <div class="product__sidebar__view">
                            <div class="section-title">
                                <h5 style={{display:"flex"}}>Xem Nhiều Nhất</h5>
                            </div>
                            <ul class="filter__controls">
                                <li class="active" data-filter="*">Ngày </li>
                                <li data-filter=".week">Tuần</li>
                                <li data-filter=".month">Tháng</li>
                                <li data-filter=".years">Năm</li>
                            </ul>
                            {
                                spmoi.map((sanpham,index)=>
                                <div class="filter__gallery">
                                <div class="product__sidebar__view__item set-bg mix day years"
                                style={{backgroundImage:`url(${sanpham.hinh})`}}>
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
</div>
</div>
</section>
    </div>
  
 </div>

  )
}

export default Categories
