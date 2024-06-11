'use client'; // browser only: https://react.dev/reference/react/use-client

import { useEffect } from 'react';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';
import { HoneycombWebSDK } from '@honeycombio/opentelemetry-web';

export default function Observability() {
  useEffect(() => {
    const sdk = new HoneycombWebSDK({
      debug: true, // turn off in production
      // endpoint: "https://api.eu1.honeycomb.io/v1/traces", // uncomment to send to EU instance
      apiKey: process.env.HNY_API_KEY, // Replace with your Honeycomb Ingest API Key
      serviceName: 'next o11y poc', // Replace with your application name. Honeycomb will name your dataset using this variable.
      instrumentations: [getWebAutoInstrumentations()],
    });
    sdk.start();
  }, []);

  return null;
}
