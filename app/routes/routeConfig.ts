import Resume from "./Resume/Resume";
import Home from "./Home/App";

export const routeConfig = [
  {
    path: "/",
    Element: Home,
    index: true,
  },
  {
    path: "/resume",
    Element: Resume,
  },
];
