import React from "react";

const Route1 = React.lazy(() => import("./routes/Route1"));
const Route2 = React.lazy(() => import("./routes/Route2"));
const Route3 = React.lazy(() => import("./routes/Route3"));

export const App = () => {
  return (
    <>
      <Route1 />
      <Route2 />
      <Route3 />
    </>
  );
};
