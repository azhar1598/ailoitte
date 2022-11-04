import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";


const steps = ["Create Project", "Add Team", "Preview & Hire"];

export default function HorizontalLabelPositionBelowStepper() {
  return (
    <div className=" lg:-ml-48 my-16">
      <Stepper activeStep={1} alternativeLabel sx={{ width: "90vw" }}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              <p className='text-slate-400 font-medium'>{`Step ${index + 1}`}</p>
              <p className='text-[#2B3990] font-semibold py-2'>{label}</p>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
