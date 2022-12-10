import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from "react-query";
import {AuthProvider} from "./providers/auth.provider";
import {HomeContainer} from "./home/home.container";

const queryClient = new QueryClient()
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <AuthProvider>
              <HomeContainer />
          </AuthProvider>
      </QueryClientProvider>
  </React.StrictMode>
);
