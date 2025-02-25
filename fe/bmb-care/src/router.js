import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/homepage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import GioiThieu from "./pages/users/gioithieu";
import DichVu from "./pages/users/dichvu";


const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.GIOITHIEU,
            component: <GioiThieu />
        },
        {
            path: ROUTERS.USER.DICHVU,
            component: <DichVu />
        }
    ]

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>

    )
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;