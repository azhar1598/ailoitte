import * as icon from "@mui/icons-material";
import * as mui from "@mui/material";
import VertMenu from "./VertMenu";
import { connect } from "react-redux";

function Card({ stateMembers }) {
  return (
    <div className=" mr-2  flex flex-wrap  ">
      {stateMembers?.members?.map((item, index) => (
        <mui.Paper
          sx={{ width: "20rem", boxShadow: "none", paddingLeft: "2vw" }}
        >
          {item.candidate.length > 0 ? (
            <p
              className={`bg-[#545479] text-center  mt-6 rounded-t-lg  drop-shadow-lg text-white py-1 px-2 cursor-pointer`}
            >
              {item.role}
            </p>
          ) : (
            ""
          )}
          {item?.candidate.map((i) => (
            <div className="flex items-center justify-between pt-2 pb-2 border-slate-200 border-x-2 border-b-2 px-2">
              <div className="flex items-center">
                <mui.Avatar alt="img here" src={i.img} />
                <div className="px-2 ">
                  <p className="font-medium"> {i.name} </p>
                  <p className="text-[12px] text-slate-500 font-medium">
                    {i.experience} years
                  </p>
                </div>
              </div>
              <VertMenu domain={item} candidate={i} />
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
