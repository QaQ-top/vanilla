import Home from '../home/config';
import Main from '../main/config';

const global = {

}

const routeVariable = {
  "/index.html" : Home,
  "/src/pages/main/index.html": Main
}

export function pagesVariableConfig(path: string) {
  return Object.assign(routeVariable[path], global);
}