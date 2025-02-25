import React from "react";
import "./style.scss";
import logo from '../../../../assets/images/logo/logo-removebg.png'
import { Button } from "react-bootstrap";
import Menu from './menu';


const Header = () => {
    return (
        <div className="header_top">
            <div className="container">
                <div className="row header_container content_header">
                    <div className="col-md-4 col-sm-4 hidden_col">
                        <div className="d-flex flex-column align_phone_left">
                            <span>Hotline</span>
                            <span>0903.740.661</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-6">
                        <img className="logo_company" src={logo} alt="BMB bạn mẹ bé"></img>
                    </div>
                    <div className="col-md-4 col-sm-4 col-6 align_booking_right">
                        <Button className="btn_custom">Đặt Lich</Button>
                    </div>
                </div>
                <div>
                    <Menu></Menu>
                </div>
            </div>
        </div>
    )
}

export default Header;