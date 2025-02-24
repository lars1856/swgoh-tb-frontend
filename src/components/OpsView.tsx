import { Dialog, DialogTitle, DialogContent } from "@mui/material";

interface OpsInput {
  selectedDay: number;
  selectedPlanet: number;
}
const OpsView = (input: OpsInput) => {
  return (
    <>
      <DialogTitle>
        Details for Day {(input.selectedDay ?? 0) + 1} and Planet{" "}
        {input.selectedPlanet}
      </DialogTitle>
      <DialogContent>
        <p>Popup content to be filled later.</p>
      </DialogContent>
    </>
  );
};
export default OpsView;
