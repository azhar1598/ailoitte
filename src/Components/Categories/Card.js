import React, { useEffect, useState } from "react";
import { data } from "../../assets/data";
import * as icon from "@mui/icons-material";
import * as mui from "@mui/material";
import styled from "styled-components";
import { connect } from "react-redux";
import { setMembers } from "../../actions";
import ControlledAccordions from "./ControlledAccordions";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';


function Card({ stateCategories, dispatchSetMembers, stateMembers }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [id, setId] = useState();
  const [renderData, setRenderData] = useState();
  const [dynamic, setDynamic] = useState();

  const [expanded, setExpanded] = React.useState(false);


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

  const Box = styled.div`
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  `;

  const handleClick = (id) => {
    setShowDropdown(!showDropdown);
    const getData = data.filter((item) => {
      if (item.id == id) return item;
    });
    setId(id);
    setRenderData(getData);
  };

  console.log("stateCategories", stateCategories);

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

  

  return (
    <div className=" mr-2 ">
    
      {stateCategories?.data?.map((item, index) => (
      <div className="rounded-full mt-6 bg-[#0169FE]">
            <Accordion
          sx={{ background: "#0169FE" }}
          onChange={handleChange(item.id)}
        >
          <AccordionSummary
            sx={{ color: "white" ,}}
            expandIcon={<CustomExpandIcon />}
          >
            {item.role}
          </AccordionSummary>
          {

            item.candidates.map((i) => (
              <div className="flex items-center justify-between pt-2 pb-2 border-slate-200 border-x-2 border-b-2 px-2 bg-white">
                <div className="flex items-center">
                  <mui.Avatar alt="img here" src={i.img} />
                  <div className="px-2 ">
                    <p className="font-medium">{i.name}</p>
                    <p className="text-[12px] text-slate-500 font-medium">
                      3 yrs Exp
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
        </Accordion>
      </div>
      ))}
      {/* <ControlledAccordions stateCategories={stateCategories}/> */}
 
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
