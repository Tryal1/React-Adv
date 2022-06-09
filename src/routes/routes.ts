import { lazy, LazyExoticComponent } from "react";

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
const lazy1 = lazy(() => import(/*webpackChunkName: "LazyPage1"*/"../01-lazyload/pages/LaztPage1"));
const lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/"../01-lazyload/pages/LaztPage2"));
const lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/"../01-lazyload/pages/LaztPage3"));

// Definimos las runtas nombre component
// to hacia donde
// path donde esta
// Component en donde se encuenta el omponente donde se renderiza ej: el LaztPage1
export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: lazy1,
    name: "Lazy-1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: lazy2,
    name: "Lazy-2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: lazy3,
    name: "Lazy-3",
  },
];
