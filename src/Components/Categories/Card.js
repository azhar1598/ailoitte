import React, {  useState } from "react";
import * as icon from "@mui/icons-material";
import * as mui from "@mui/material";
import styled from "styled-components";
import { connect } from "react-redux";
import { setMembers } from "../../actions";






function Card({ stateCategories, dispatchSetMembers, stateMembers }) {

  const [expanded, setExpanded] = useState(false);

  const CustomExpandIcon = () => {
    return (
      <mui.Box
        sx={{
          ".Mui-expanded & > .collapsIconWrapper": {
            display: "none",
          },
          ".expandIconWrapper": {
            display: "none",
          },
          ".Mui-expanded & > .expandIconWrapper": {
            display: "block",
          },
        }}
      >
        <div className="expandIconWrapper">
          {" "}
          <icon.RemoveCircleOutlineRounded style={{ color: "white" }} />
        </div>
        <div className="collapsIconWrapper">
          <icon.AddCircleOutlineRounded style={{ color: "white" }} />
        </div>
      </mui.Box>
    );
  };


  const Button = styled.button`
    background-color: ${({ bg }) => (bg ? "gray" : "#545467")};
    color: ${({ bg }) => (bg ? "#dbdbdb" : "white")};
    border-radius: 5px;
    padding: 0 30px 0 30px;
    height: 35px;
    font-size: 14px;
    box-shadow: 1px 0.2px 1px 0.2px gray;

    &:hover {
      background-color: ${({ bg }) => (bg ? "" : "#545467")};
    }
  `;

  const addCandidate = (domain, candidate) => {
    let result = checkIfAdded(domain, candidate);
    console.log("result", result);
    if (!result) {
      let payload = { domain, candidate };
      dispatchSetMembers({ payload });
    }
  };

  const checkIfAdded = (domain, candidate) => {
    let text = stateMembers.members.some((item) => {
      if (item.id == domain.id) {
        let ii = item.candidate.some((i, index) => {
          return i.id == candidate.id;
        });
        return ii;
      }
    });

    return text;
  };

  

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }; 


  return (
    <div className=" mr-2 ">  
      {stateCategories?.data?.map((item, index) => (
      <div className="rounded-full mt-6 w-72 bg-[#0169FE]">
            <mui.Accordion
          sx={{ background: "#0169FE" }}
          onChange={handleChange(item.id)}
        >
          <mui.AccordionSummary
            sx={{ color: "white" ,}}
            expandIcon={<CustomExpandIcon />}
          >
            {item.role}
          </mui.AccordionSummary>
          {

            item.candidates.map((i) => (
              <div className="flex items-center justify-between pt-2 pb-2 border-slate-200 border-x-2 border-b-2 px-2 bg-white">
                <div className="flex items-center">
                  <mui.Avatar alt="img here" src={i.img} />
                  <div className="px-2 ">
                    <p className="font-medium">{i.name}</p>
                    <p className="text-[12px] text-slate-500 font-medium">
                      {i.experience} years
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    addCandidate(item, i);
                  }}
                  bg={checkIfAdded(item, i)}
                >
                  Add
                </Button>
              </div>
            ))}
        </mui.Accordion>
      </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stateCategories: state?.categories,
    stateMembers: state?.members,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetMembers: (payload) => dispatch(setMembers(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
