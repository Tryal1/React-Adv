import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXcomponent = () => JSX.Element;

// ruta con info extricta
interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXcomponent> | JSXcomponent;
  name: string;
}

// Acemos que cargue los path por lazy 
//en el /*webpackChunkName: "LazyPage1"*/ le podemos cambiar el nombre al chunk
const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/"../01-lazyload/layout/LazyLayout"));
// const lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/"../01-lazyload/pages/LaztPage2"));
// const lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/"../01-lazyload/pages/LaztPage3"));

// Definimos las runtas nombre component
// to hacia donde
// path donde esta
// Component en donde se encuenta el omponente donde se renderiza ej: el LaztPage1
export const routes: Route[] = [
  {
    to: "/lazylayout/",
    path: "/lazylayout/*",
    Component: LazyLayout,
    name: "LazyLayout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No lazy",
  },
];
