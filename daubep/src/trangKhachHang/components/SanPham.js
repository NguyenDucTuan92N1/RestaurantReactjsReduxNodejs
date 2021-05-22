import React, { useState, Component } from 'react'


function handleClickOrder(event) {

    event.preventDefault();
    
}

export default function SanPham(props) {
    
    const [sanPhamState, setSanPhamState] = useState({name:props.name,
                                                    price: props.price,
                                                    image: props.image,
                                                    quatity: 1});
    const [gioHangState, setGioHangState] = useState(
        [
            // {
            //     name: "",
            //     price: "",
            //     image: "",
            //     quatity: 0
            // }
        ]
    )
    // const getListSanPhamGioHang = JSON.parse(localStorage.getItem("dataGioHang")) !== "" ? localStorage.getItem("dataGioHang") : [];
    // console.log(typeof(getListSanPhamGioHang));
    // if(getListSanPhamGioHang !== []){
    //     const sp = getListSanPhamGioHang.filter(SanPham => SanPham.name === props.name);
    //     console.log(typeof(sp));
        

    //     if ( sp !== null){
    //         setSanPhamState({...sanPhamState, quatity: sanPhamState.quatity + 1});
    //     }
    // }
    

    const addMessage = (newMessage) => setGioHangState(state => [...state, newMessage])

    localStorage.setItem('dataGioHang', gioHangState)
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cat single-cat2 text-center mb-40">
                <div className="cat-img">
                    <img src="assets/img/gallery/pro-items3.jpg" alt="" />
                    <div className="numbering">{props.price}K</div>
                </div>
                <div className="cat-cap">
                    <h5><a href="#">{props.name}</a></h5>
                    <p>{props.detail} </p>
                    <a href="#" className="browse-btn" onClick={(event) => {handleClickOrder(event); 
                                                                            
                                                                            addMessage(JSON.stringify(sanPhamState))

                                                                            }}>Order Now</a>
                </div>
            </div>
        </div>

    )
}

