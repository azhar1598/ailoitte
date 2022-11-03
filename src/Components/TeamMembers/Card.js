import React, { useState } from "react";
import { data } from "../../assets/data";
import * as icon from "@mui/icons-material";
import * as mui from "@mui/material";
import styled from "styled-components";
import VertMenu from "./VertMenu";
import { connect } from "react-redux";

function Card({ stateMembers }) {
  const [id, setId] = useState();
  const [renderData, setRenderData] = useState();

  console.log("stateMembers", stateMembers);

  const handleClick = (id) => {
    const getData = data.filter((item) => {
      if (item.id == id) return item;
    });
    setId(id);
    setRenderData(getData);
    console.log("getData", getData);
  };

  return (
    <div className=" mr-2  flex flex-wrap ">
      {stateMembers?.members?.map((item, index) => (
        <mui.Paper sx={{ width: "20vw", boxShadow: "none" ,paddingLeft:'20px'}}>
          <p
            className={`bg-[#545479] text-center  mt-6 rounded-t-lg  drop-shadow-lg text-white py-1 px-2 cursor-pointer`}
            onClick={() => handleClick(item.id)}
          >
            {item.role}
          </p>

          {item?.candidate.map((i) => (
            <div className="flex items-center justify-between pt-2 pb-2 border-slate-200 border-x-2 border-b-2 px-2">
              <div className="flex items-center">
                <mui.Avatar alt="img here" src={i.img} />
                <div className="px-2 ">
                  <p className="font-medium"> {i.name} </p>
                  <p className="text-[12px] text-slate-500 font-medium">
                    3 yrs Exp
                  </p>
                </div>
              </div>
              <VertMenu domain={item} candidate={i}/>
            </div>
          ))}
        </mui.Paper>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stateMembers: state?.members,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
