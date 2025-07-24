import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  /*
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
*/

  <React.StrictMode>
    <Authenticator
      components={{
        SignIn: {
          Header() {
            return (
              <div style={{ textAlign: 'center', marginBottom: 16 }}>
                <img src="/logo.png" alt="Logo"   style={{ width: 250, display: 'block', margin: '0 auto' }} />
                <h2>Welcome! Please sign in.</h2>
              </div>
            );
          }
        }
      }}
      formFields={{
        signUp: {
          gender: {
            label: 'Gender (male/female)',
            type: 'text',
            required: true,
          },
        },
      }}
    >
      <App />
    </Authenticator>
  </React.StrictMode>




);
