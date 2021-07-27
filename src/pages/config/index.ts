import Home from '../home/config';

const global = {
  
}

const routeVariable = {
  "/index.html" : Home,
}

export function pagesVariableConfig(path: string) {
  return Object.assign(routeVariable[path], global);
}