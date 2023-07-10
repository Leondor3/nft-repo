import { Link, Navigate, Outlet } from "react-router-dom";
import { Title } from ".";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
    return (
        <>
            <Navigate to="/not-found" replace={true} />
            <Outlet />

            <section className="h-full">
                <div className="container h-full">
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="space-y-2 w-full flex flex-col justify-center items-center">
                            <Title size="xl" theme="h1" color="white">404</Title>
                            <Title size="lg">Oops, this page was not found</Title>
                            <Title color="gray" size="base">Looks like you got lost... Try going back to the previous page or accessing the home page</Title>
                            <div className="flex gap-2">
                                <ArrowLeft />
                                <Link to="/">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}