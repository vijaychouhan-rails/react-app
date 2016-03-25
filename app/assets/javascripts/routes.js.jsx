var Route = ReactRouter.Route,
  DefaultRoute = ReactRouter.DefaultRoute;

this.AppRoutes = (
  <Route handler={App}>
    <DefaultRoute handler={Albums} />
    <Route handler={AboutUs} path='about-us' />
    <Route handler={Albums} path='albums' />
    <Route handler={Login} path='/login' />
  </Route>
);

