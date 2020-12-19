import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-credit-cards/es/styles-compiled.css";
import HomePage from "./Pages/HomePage/HomePage";
import RoomSelectPage from "./Pages/RoomSelectPage/RoomSelectPage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import "./app.css";
import TopMenu from "./Components/TopMenu/TopMenu";
import reducer from "./redux/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <HashRouter>
          <TopMenu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/roomselection" component={RoomSelectPage} />
            <Route exact path="/payment" component={PaymentPage} />
          </Switch>
        </HashRouter>
      </div>
    </Provider>
  );
};

export default App;
