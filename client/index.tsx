import React from "react";
import { hydrate } from "react-dom";

import { Provider, getServerData, getTemplate } from "@reactivated";
import { HelmetProvider, Helmet } from "react-helmet-async";

const { props, context } = getServerData();

const Template = await getTemplate(context);


hydrate(
  <HelmetProvider>
    <Provider value={context}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hello Reactivated</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href={`${context.STATIC_URL}favicon.ico`}
          type="image/x-icon"
        />
      </Helmet>
      <Template {...props} />
    </Provider>
  </HelmetProvider>,
  document.getElementById("root")
);
