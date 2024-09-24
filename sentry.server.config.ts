// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://cca282ad67ee41f1accde9c16a2ab476@o4507776030801920.ingest.us.sentry.io/4507776035979264",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
