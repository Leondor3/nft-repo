import { Navigate, Outlet } from "react-router-dom";

export function NotFound() {
    return (
        <>
            <Navigate to="/not-found" replace={true} />
            <Outlet />

            <h1>Not found</h1>
        </>
    )
}