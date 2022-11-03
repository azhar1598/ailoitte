import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import * as icon from "@mui/icons-material";
import { Box } from "@mui/material";
import * as mui from "@mui/material";

export default function ControlledAccordions({ stateCategories }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const CustomExpandIcon = () => {
    return (
      <Box
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
      </Box>
    );
  };
  return (
    <div>
      {stateCategories?.data?.map((item, index) => (
        <Accordion
          sx={{ marginTop: "20px", borderRadius: "20px", padding: "0px",minHeight:'0px' }}
          onChange={handleChange(item.id)}
        >
          <AccordionSummary
            sx={{ borderRadius: "10px", background: "#0169FE", color: "white" ,}}
            expandIcon={<CustomExpandIcon />}
          >
            {item.role}
          </AccordionSummary>
   {
           
            item.candidates.map((i) => (
              <div className="flex items-center justify-between pt-2 pb-2 border-slate-200 border-x-2 border-b-2 px-2">
                <div className="flex items-center">
                  <mui.Avatar alt="img here" src={i.img} />
                  <div className="px-2 ">
                    <p className="font-medium">{i.name}</p>
                    <p className="text-[12px] text-slate-500 font-medium">
                      3 yrs Exp
                    </p>
                  </div>
                </div>
              
              </div>
            ))}
        </Accordion>
      ))}
    </div>
  );
}
