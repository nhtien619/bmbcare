import React, { useState } from "react";
import { ROUTERS } from "../../../../utils/router";
import { Link, NavLink } from "react-router-dom";
import "./menu_style.scss";

const Menu = () => {
    const [menus, setMenus] = useState([
        {
            "name": "Trang Chủ",
            "path": ROUTERS.USER.HOME
        },
        {
            "name": "Giới Thiệu",
            "path": ROUTERS.USER.GIOITHIEU,
            "child": [
                {
                    "name": "Về Chúng Tôi",
                    "path": ROUTERS.USER.VECHUNGTOI
                },
                {
                    "name": "Liên Hệ",
                    "path": ROUTERS.USER.LIENHE
                }]
        },
        {
            "name": "Dịch Vụ",
            "path": ROUTERS.USER.DICHVU
        }
    ]);

    //className={menuKey === 0 ? "active" : ""}

    return (
        <>
            <nav className="header_menu">
                <ul>
                    {
                        menus?.map((menu, menuKey) => (
                            <li key={menuKey}>
                                <NavLink to={menu?.path} relative="path">{menu?.name}</NavLink>
                            </li>

                        ))
                    }
                </ul>
            </nav>
        </>
    )
}

export default Menu;