import Resume from "./Resume/Resume";
import Home from "./Home/App";

export const routeConfig = [
  {
    path: "/",
    Element: Resume,
    index: true,
  },
  {
    path: "/about",
    Element: Home,
  },
];
