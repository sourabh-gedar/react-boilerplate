import { RoutePaths } from './RouterPaths';
import { About } from './RouterLazyImports';

const { aboutPath } = RoutePaths;


const publicRoutes = [
  {
    path: aboutPath,
    component:About
  }
];

export { publicRoutes };