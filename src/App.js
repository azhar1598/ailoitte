import { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import Header from "./Components/Common/Header";
import Categories from "./Components/Categories/Categories";
import TeamMembers from "./Components/TeamMembers/TeamMembers";
import { getCategories } from "./actions";
import HorizontalLabelPositionBelowStepper from "./Components/Common/Stepper";

function App({ dispatchGetCategories }) {
  useEffect(() => {
    dispatchGetCategories();
  }, []);

  return (
    <div className="app mb-36">
      <Header />
      <HorizontalLabelPositionBelowStepper />
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
