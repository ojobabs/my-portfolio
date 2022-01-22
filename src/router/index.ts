import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import customRoutes from "./custom";
import { convertToKebab } from "../assets/helper";

const views = import.meta.glob("../views/*.vue");
const routes: Array<RouteRecordRaw> = [];

Object.entries(views).forEach(([componentPath, definition]) => {
  const name = convertToKebab(
    (componentPath.split("/").pop() || "").replace(/\.\w+$/, "")
  );
  let path = `/${name}`;
  const component = definition;
  if (name === "home") {
    path = "/";
  }
  const routeRecord: RouteRecordRaw = {
    path,
    name,
    component,
  };
  routes.push(routeRecord);
});

routes.push(
  ...[
    {
      path: "/:catchAll(.*)*",
      redirect: { name: "home" },
    },
  ],
  ...customRoutes
);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "text-green-500",
});

export default router;
