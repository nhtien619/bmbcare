import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/users/homepage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";


const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        }
    ]

    return (
        <MasterLayout>
            <Routes>

                    // <Route path='/' element={<HomePage></HomePage>} />
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