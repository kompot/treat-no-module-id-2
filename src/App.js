import React from "react";

import { Provider } from "./components/ui/Provider";

const Route1 = React.lazy(() => import("./routes/Route1"));
const Route2 = React.lazy(() => import("./routes/Route2"));

export const App = () => {
  return (
    <Provider>
      <>
        <Route1 />
        <Route2 />
      </>
    </Provider>
  );
};
