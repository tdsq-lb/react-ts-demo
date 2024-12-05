import React from "react"
import { createBrowserRouter } from "react-router-dom"

import MainLayout from "../pages/layouts/MainLayout"
import ManageLayout from "../pages/layouts/ManageLayout"
import QuestionLayouts from "../pages/layouts/QuestionLayouts"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import NotFound from "../pages/NotFound"
import List from "../pages/manage/List"
import Trash from "../pages/manage/Trash"
import Star from "../pages/manage/Star"
import Edit from "../pages/question/Edit"
import Stat from "../pages/question/Stat"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "manage",
        element: <ManageLayout />,
        children: [
          {
            path: "list",
            element: <List />
          },
          {
            path: "star",
            element: <Star />
          },
          {
            path: "trash",
            element: <Trash />
          }
        ]
      },

      {
        path: "*", // 404 路由配置
        element: <NotFound />
      }
    ]
  },
  {
    path: "question",
    element: <QuestionLayouts />,
    children: [
      {
        path: "edit/:id",
        element: <Edit />
      },
      {
        path: "stat/:id",
        element: <Stat />
      }
    ]
  }
])

export default router

//  ------------------->>>>>> 分割线 <<<<<<-------------------
// 常用路由 常量
export const HOME_PATHNAME = "/"
export const LOGIN_PATHNAME = "/login"
export const REGISTER_PATHNAME = "/register"
export const MANAGE_INDEX_PATHNAME = "/manage/list"
