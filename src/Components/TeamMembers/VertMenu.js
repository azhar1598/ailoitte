import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { removeMember } from "../../actions";
import { connect } from "react-redux";

const options = ["Lead", "Remove"];

const ITEM_HEIGHT = 48;

function VertMenu({ domain, candidate,dispatchRemoveMember }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemoveMember = () => {
    let payload = { domain, candidate };
    setAnchorEl(null);
    dispatchRemoveMember({ payload });
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "15ch",
          },
        }}
      >
        {options.map((option, index) => (
          <div className={`${index == 0 ? "border-slate-200 border-b-2" : ""}`}>
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={option == "Remove" ? handleRemoveMember : handleClose}
            >
              {option}
            </MenuItem>
          </div>
        ))}
      </Menu>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stateMembers: state?.members,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      dispatchRemoveMember: (payload) => dispatch(removeMember(payload)),
    };
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(VertMenu);
