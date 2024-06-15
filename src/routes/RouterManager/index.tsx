// here your routing logic will come
import { Suspense } from "react";
import { Route , Routes } from "react-router-dom";
import { publicRoutes } from "../index";
import { VisitorLayout } from '../RouterLazyImports'

const Index = () => {

    return <>
        <Suspense fallback={<h1>App is loading.</h1>}>
            <Routes>
                {publicRoutes.map((route, index) => (
                    <Route
                        path={route.path}
                        element={
                            <VisitorLayout>
                               <route.component/>
                            </VisitorLayout>
                        }
                        key={index}
                    />
                ))}
                {/* {privateRoutes.map((route, index) => (
                <Route
                    path={route.path}
                    element={
                        <MemberLayout>
                            <route.component/>
                        </MemberLayout>}
                    key={index}
                />
            ))} */}
            </Routes>
        </Suspense>
    </>
}
export default Index

