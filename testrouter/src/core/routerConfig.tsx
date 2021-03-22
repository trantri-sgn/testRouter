import React from "react";
import { Route, Switch } from "react-router-dom";
export default function routerConfig(routers: any) {
  console.log(routers);
  return (
    <Switch>
      {routers.map((e: any) => {
        const { exact, path, component: Component, routers: childRouters } = e;
        let children: any = [];
        if (childRouters) {
          children = routerConfig(childRouters);
        }
        return (
          <Route
            key={Component}
            exact={exact}
            path={path}
            component={(...prop: any) => (
              <Component {...prop}>{children}</Component>
            )}
          ></Route>
        );
      })}
    </Switch>
  );
}
