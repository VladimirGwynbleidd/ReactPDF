import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "components/Sidebar";
// import Dashboard from "pages/Dashboard";
import Settings from "pages/Settings";
import Tables from "pages/Tables";
import Maps from "pages/Maps";
import Country from "pages/Country";
import DriverHome from "pages/DriverScore/Reporte";
import Footer from "components/Footer";
import { PDFViewer } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import Login from "./pages/Login/Login";
import Header from "components/Header";
import './App.css';
;

function App() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  return (
    <>
      <div className="App">
        {/* <Header /> */}
        <Sidebar />
        <div className="md:ml-64">
          <Switch>
            <Route path="/login" component={Login} />
            {/* <Route exact path="/" component={Dashboard} /> */}
            <Route exact path="/" component={DriverHome} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/tables" component={Tables} />
            <Route exact path="/maps" component={Maps} />
            <Route exact path="/country" component={Country} />
            <Route exact path="/reporte" component={DriverHome} />
            <Redirect from="*" to="/" />
          </Switch>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
