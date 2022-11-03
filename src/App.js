import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import Header from "./Components/Common/Header";
import Categories from "./Components/Categories/Categories";
import TeamMembers from "./Components/TeamMembers/TeamMembers";
import { useEffect } from "react";
import { getCategories } from "./actions";

function App({ dispatchGetCategories }) {
  useEffect(() => {
    dispatchGetCategories();
  }, []);

  return (
    <div className="app mb-36">
      <Header />
      <div className="flex mt-12">
        <Categories />
        <TeamMembers />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetCategories: () => dispatch(getCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
