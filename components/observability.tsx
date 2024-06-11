'use client'; // browser only: https://react.dev/reference/react/use-client

import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';
import { HoneycombWebSDK } from '@honeycombio/opentelemetry-web';

export default function Observability() {
  try {
    const sdk = new HoneycombWebSDK({
      debug: true, // turn off in production
      apiKey: process.env.HNY_API_KEY, // Replace with your Honeycomb Ingest API Key
      serviceName: 'next o11y poc', // Replace with your application name. Honeycomb will name your dataset using this variable.
      instrumentations: [getWebAutoInstrumentations()], // Adds automatic instrumentation
    });
    sdk.start();
  } catch (e) {}
}
