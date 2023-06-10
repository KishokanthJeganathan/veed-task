"use client";
import type { AppProps } from "next/app";
import GlobalStyle from "../components/globalstyles";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/ErrorComponent/ErrorComponent";

const logError = (error: Error, info?: { componentStack: string }) => {
  // send the errors to sentry
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // this will log all errors ecncountered during data fetching
    onError: (error) => {
      logError(error as unknown as Error);
    },
  }),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorComponent} onError={logError}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
