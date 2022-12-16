import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { store } from "./redux/store";
import { environment } from "./types";
import Toast from "./components/Toast";
import PopupModal from "./components/PopupModal";

if (process.env.NODE_ENV === environment.PRODUCTION) {
  disableReactDevTools();
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store()}>
      <Router>
        <HelmetProvider>
          <App />
          <Toast />
          <PopupModal />
        </HelmetProvider>
      </Router>
    </Provider>
  </StrictMode>
);
