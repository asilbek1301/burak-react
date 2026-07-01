import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./app/MaterialTheme";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/index.css";

/* GLOBAL INTEGRATIOINS: REDUX & MUI & ROUTER & SOCKET & CONTEXT & ReactQuery ...  */
ReactDOM.render(
  // 🛜VIRTUAL DOM
  <React.StrictMode>
    {/* 🧔‍♂️PARENT REDUX - frontend uchun vaqtinchalik ma'lumotlar bunkeri */}
    <Provider store={store}>
      {/* 🧔‍♂️PARENT MUI */}
      <ThemeProvider theme={theme}>
        {/* Hamma browserlarda 1-chi o'rinda MUIni ustuvor qilish */}
        <CssBaseline />
        {/* 🧔‍♂️PARENT ROUTER */}
        <Router>
          {/* 🧒CHILD */}
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,

  // 🌏REAL DOM
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
