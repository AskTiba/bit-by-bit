import StepConnector from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";

const NoLineConnector = styled(StepConnector)(() => ({
  "&.MuiStepConnector-root": {
    display: "none",
  },
}));
export default NoLineConnector;
