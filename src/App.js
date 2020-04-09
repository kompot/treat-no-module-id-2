import React from "react";

import { Provider } from "./components/ui/Provider";

import Route1 from "./routes/Route1";
import Route2 from "./routes/Route2";
import Route3 from "./routes/Route3";

export const App = () => {
  return (
    <Provider>
      <>
        <Route1 />
        <Route2 />
        <Route3 />
      </>
    </Provider>
  );
};
