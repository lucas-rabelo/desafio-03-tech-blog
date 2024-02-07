import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { BlogList } from "../pages/BlogList";

export function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/articles" element={<BlogList />} />
            </Routes>
        </BrowserRouter>
    );
}