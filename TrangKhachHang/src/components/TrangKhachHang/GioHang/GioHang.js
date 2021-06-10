import React, { Component, Fragment } from 'react'
import ItemGioHang from '../ItemGioHang/ItemGioHang';
import { handleCLickCreateOrder } from '../Alert/Alert';
import  { Redirect } from 'react-router-dom'

export default class GioHang extends Component {
    state = {
        products: [],
        token: this.props.token,
        isUpdate: false,
        redirectOrder: false
    };

    componentDidMount() {
        this.setState({ token: this.props.token });
        this.setState({ isUpdate: false });
        this.loadProducts();
    }
    loadProducts = () => {
        console.log('Loading cart');

        let method = 'GET';
        let url = 'http://localhost:3001/cart';

        fetch(url, {
            method: method,
            headers: { 'Authorization': 'Bearer ' + this.props.token },
        })
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch cart.');
                }
                return res.json();
            })
            .then(resData => {
                console.log("resData.products");
                console.log(resData.products);
                this.setState({
                    products: resData.products,
                });
            })
            .catch(this.catchError);
    };
    delete = (i) => {
        var upd = this.state.isUpdate;
        this.setState({
            isUpdate: !upd
        })
        console.log('loaddddddđ');
        setTimeout(this.loadProducts(), 1000);
    }
    showAllProduct = () => {
        if (this.state.products.length > 0) {
            console.log(this.state.products);
            let i = 0;
            return (
                this.state.products.map(product => {
                    i = i + 1;
                    return <ItemGioHang data={{ _id: product.productId._id, index: i, img: product.productId.imageUrl, price: product.productId.price, title: product.productId.title, quantity: product.quantity }} token={this.props.token} onDelete={this.delete}></ItemGioHang>
                })
            );
        }
    };

    createOrder = () => {
        console.log('createOrder');

        // const formData = new FormData();
        // formData.append('productId', this.props.data._id);

        let method = 'POST';
        let url = 'http://localhost:3001/create-order';

        fetch(url, {
            method: method,
            headers: { 'Authorization': 'Bearer ' + this.props.token },
            // body: formData
        })
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Creating order Failed.');
                }
                console.log(res);
                return res.json();
            })
            .then(resData => {
                this.loadProducts();
                handleCLickCreateOrder();
                console.log(resData);
                this.setState({
                    redirectOrder: true
                })
            })
            .catch(this.catchError);
    };
    showButton = () => {
        if (this.state.products.length > 0) return (
            <div className="row">
                <div className="col-9">

                </div>
                <div className="col">
                    <a href="#" class="genric-btn success radius" onClick={(e) => this.createOrder(e)} >Đặt hàng</a>
                </div>

            </div>
        )
        else {
            return (
                <div className="row">
                <div className="col-2">

                </div>
                <div className="col-4">
                    <div className="alert alert-warning" role="alert">
                        Giỏ hàng trống
                    </div>
                </div>
            </div>
            )
        }

    }
    showRedirect = ()=>{
        const { redirectOrder } = this.state;
        
        if (redirectOrder) {
            this.setState({
                redirectOrder: false
            })
            return <Redirect to='/donhang'/>;
        }
    }
    render() {
        return (
            <Fragment>
                
                {this.showRedirect()}
                <div className="container">
                    <div className="section-top-border">
                        <h3 className="mb-30">Table</h3>
                        <div className="progress-table-wrap">
                            <div className="progress-table">

                                <div className="table-head">
                                    <div className="serial">#</div>
                                    <div className="country">Tên</div>
                                    <div className="visit">Giá</div>
                                    <div className="visit">Số lượng</div>
                                    <div className="float-right">#</div>
                                </div>
                                {this.showAllProduct()}
                            </div>
                            {this.showButton()}
                        </div>

                    </div>

                </div>

            </Fragment>
        )
    }
}
