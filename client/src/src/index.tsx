import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from "react-query";
import {AuthProvider} from "./providers/auth.provider";
import {HomeContainer} from "./home.container";

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <AuthProvider>
              <HomeContainer />
          </AuthProvider>
      </QueryClientProvider>
  </React.StrictMode>
);
