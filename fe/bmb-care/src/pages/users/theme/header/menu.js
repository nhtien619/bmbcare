import React, { useState } from "react";
import { ROUTERS } from "../../../../utils/router";
import { Link } from "react-router-dom";
import "./menu_style.scss";

const Menu = () => {
    const [menus, setMenus] = useState([
        {
            "name": "Trang Chủ",
            "path": ROUTERS.USER.HOME
        },
        {
            "name": "Giới Thiệu",
            "path": ROUTERS.USER.GIOITHIEU
        },
        {
            "name": "Dịch Vụ",
            "path": ROUTERS.USER.DICHVU
        }
    ]);


    return (
        <>
            <nav className="header_menu">
                <ul>
                    {
                        menus?.map((menu, menuKey) => (
                            <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                <Link to={menu?.path}>{menu?.name}</Link>
                            </li>

                        ))
                    }
                </ul>
            </nav>
        </>
    )
}

export default Menu;