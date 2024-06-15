//here all lazy import will come
import { lazy } from "react";

const MemberLayout = lazy(() => import('../../layout/MemberLayout'));
const VisitorLayout = lazy(() => import('../../layout/VisitorLayout'));
const About = lazy(() => import('../../pages/About'));

export { About, MemberLayout, VisitorLayout };
