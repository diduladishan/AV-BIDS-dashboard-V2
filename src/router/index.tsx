import { Fragment, Key, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import EmptyLayout from "../layout/empty-layout";
import HomeLayout from "../layout/home-layout";

import Layout_02 from "../layout/layout_02";
import { AuthGuard, ReversGuard } from "./guards";

import SuspenseScreen from "./suspense-screen";
// import AuthLayout from "../layout/auth-layout";
// import useAuth from "../utils/context/auth-context";

function Router() {
  const routes: any = [
    {
      path: "/",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/home")) }],
    },
    {
      path: "/12_events",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/12_events")) }],
    },
    {
      path: "/13_event_details_page",
      layout: Layout_02,
      routes: [
        { element: lazy(() => import("../pages/13_event_details_page")) },
      ],
    },

    {
      path: "/13_edit_event",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/13_edit_event")) }],
    },

    {
      path: "/13_edit_event_1",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/13_edit_event_1")) }],
    },

    {
      path: "/13_edit_event_2",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/13_edit_event_2")) }],
    },

    {
      path: "/13_edit_event_3",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/13_edit_event_3")) }],
    },

    {
      path: "/13_edit_event_4",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/13_edit_event_4")) }],
    },

    {
      path: "/13_edit_event_5",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/13_edit_event_5")) }],
    },

    {
      path: "/13_edit_event_6",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/13_edit_event_6")) }],
    },

    {
      path: "/14_messages",
      layout: HomeLayout,
      routes: [{ element: lazy(() => import("../pages/14_messages")) }],
    },
    { path: "*", element: lazy(() => import("./404")) },

    // {
    //   path: "/lesson",
    //   layout: HomeLayout,
    //   guard: AuthGuard,
    //   routes: [
    //     {
    //       path: ":lid",
    //       element: lazy(() => import("../pages/courses/lesson/index")),
    //     },
    //     { element: lazy(() => import("../pages/courses")) },
    //   ],
    // },

    // {
    //   path: "/auth",
    //   layout: AuthLayout,
    //   // guard: ReversGuard,
    //   routes: [
    //     {
    //       path: "forget-password",
    //       element: lazy(() => import("../pages/auth/forget-password")),
    //     },
    //     { path: "login", element: lazy(() => import("../pages/auth/login")) },
    //     {
    //       path: "register",
    //       element: lazy(() => import("../pages/auth/register")),
    //     },
    //     { element: lazy(() => import("../pages/tutors")) },
    //   ],
    // },
  ];

  const routeRender = (
    route: {
      element: any;
      guard: any;
      layout: any;
      path: string;
      routes: any[];
    },
    i: Key | null | undefined
  ) => {
    const Element = route.element ? route.element : Fragment;
    const Guard = route.guard ? route.guard : Fragment;
    const Layout = route.layout ? route.layout : Fragment;
    const isIndex: boolean = route.path ? false : true;
    let props: any = {};
    if (isIndex) {
      props["index"] = true;
    } else {
      props["path"] = route.path;
    }
    return (
      <Route
        key={i}
        {...props}
        // // index={isIndex}
        // path={route.path}
        element={
          <Guard>
            <Layout>
              <Suspense fallback={<SuspenseScreen />}>
                <Element />
              </Suspense>
            </Layout>
          </Guard>
        }
      >
        {route.routes && route.routes.map(routeRender)}
      </Route>
    );
  };
  return <Routes>{routes.map(routeRender)}</Routes>;
}

export default Router;
