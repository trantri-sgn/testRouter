import MainLayout from "layout/MainLayout";
import NotFound from "components/NotFound/NotFound";
import Home from "features/Home/Home";

const routers = [
  {
    path: "/",
    component: MainLayout,
    routers: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/500",
        component: NotFound,
        exact: true,
      },

      {
        component: NotFound,
      },
    ],
  },
];

export default routers;
