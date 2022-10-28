import React from "react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

let NotFound = lazy(() => import("../Pages/NotFound"));
let Home = lazy(() => import("../Pages/Home"));
let Users = lazy(() => import("../Pages/Users"));
let User = lazy(() => import("../Pages/User"));
let MaleUsers = lazy(() => import("../Pages/MaleUsers"));
let FemaleUsers = lazy(() => import("../Pages/FemaleUsers"));
let AllUsers = lazy(() => import("../Pages/AllUsers"));

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />}>
        <Route path="male" element={<MaleUsers />} />
        <Route path="female" element={<FemaleUsers />} />
        <Route path="all" element={<AllUsers />} />
        <Route path=":userId" element={<User />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
