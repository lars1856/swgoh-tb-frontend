import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import "./TbOverview.scss";
import OpsView from "./OpsView";

interface PlanetPlan {
  stars: number;
  addedGp: number;
  totalGp: number;
}

interface DayPlan {
  planets: PlanetPlan[];
}

interface OverallPlan {
  days: DayPlan[];
}

const initialOverallPlan: OverallPlan = {
  days: [
    {
      planets: [
        { stars: 3, addedGp: 90, totalGp: 90 },
        { stars: 3, addedGp: 90, totalGp: 90 },
        { stars: 3, addedGp: 90, totalGp: 90 },
        { stars: 0, addedGp: 0, totalGp: 0 },
        { stars: 0, addedGp: 0, totalGp: 0 },
      ],
    },
    {
      planets: [
        { stars: 3, addedGp: 90, totalGp: 90 },
        { stars: 3, addedGp: 90, totalGp: 90 },
        { stars: 0, addedGp: 90, totalGp: 90 },
        { stars: 0, addedGp: 0, totalGp: 0 },
        { stars: 0, addedGp: 0, totalGp: 0 },
      ],
    },
    {
      planets: [
        { stars: 3, addedGp: 90, totalGp: 90 },
        { stars: 0, addedGp: 90, totalGp: 90 },
        { stars: 3, addedGp: 90, totalGp: 90 },
        { stars: 0, addedGp: 0, totalGp: 0 },
        { stars: 0, addedGp: 0, totalGp: 0 },
      ],
    },
    {
      planets: [
        { stars: 0, addedGp: 90, totalGp: 90 },
        { stars: 3, addedGp: 90, totalGp: 90 },
        { stars: 3, addedGp: 90, totalGp: 90 },
        { stars: 0, addedGp: 0, totalGp: 0 },
        { stars: 0, addedGp: 0, totalGp: 0 },
      ],
    },
    {
      planets: [
        { stars: 0, addedGp: 90, totalGp: 90 },
        { stars: 0, addedGp: 90, totalGp: 90 },
        { stars: 0, addedGp: 90, totalGp: 90 },
        { stars: 0, addedGp: 0, totalGp: 0 },
        { stars: 0, addedGp: 0, totalGp: 0 },
      ],
    },
    {
      planets: [
        { stars: 3, addedGp: 90, totalGp: 90 },
        { stars: 3, addedGp: 90, totalGp: 90 },
        { stars: 3, addedGp: 90, totalGp: 90 },
        { stars: 0, addedGp: 0, totalGp: 0 },
        { stars: 0, addedGp: 0, totalGp: 0 },
      ],
    },
  ],
};

const TbOverview = () => {
  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | undefined>();
  const [selectedPlanet, setSelectedPlanet] = useState<number | undefined>();
  const [overallPlan, setOverallPlan] =
    useState<OverallPlan>(initialOverallPlan);

  const handleCellClick = (dayIndex: number, planetIndex: number) => {
    setSelectedDay(dayIndex);
    setSelectedPlanet(planetIndex);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDay(undefined);
    setSelectedPlanet(undefined);
  };

  const updatePlan = (
    newStarValue: string,
    dayIndex: number,
    planetIndex: number
  ) => {
    setOverallPlan((plan) => ({
      ...plan,
      days: plan.days.map((day, dIndex) =>
        dIndex !== dayIndex
          ? day
          : {
              planets: day.planets.map((planet, pIndex) =>
                pIndex !== planetIndex
                  ? planet
                  : { ...planet, stars: Number(newStarValue) }
              ),
            }
      ),
    }));
  };

  return (
    <div className="tb-overview">
      <table className="plan">
        <thead>
          <tr>
            <th className="Day">Day</th>
            <th>Dark</th>
            <th>Mixed</th>
            <th>Light</th>
            <th>Zeffo</th>
            <th>Mandalore</th>
          </tr>
        </thead>
        <tbody>
          {overallPlan.days.map((day, dayIndex) => (
            <tr>
              <td className="Day">{dayIndex}</td>
              {day.planets.map((planet, planetIndex) => {
                return (
                  <td
                    className={`cell ${planet.stars >= 1 ? "complete" : ""} `}
                  >
                    <input
                      className="large"
                      value={planet.stars}
                      onChange={(e) =>
                        updatePlan(e.target.value, dayIndex, planetIndex)
                      }
                      // style={{
                      //   border: "1px solid rgba(255, 255, 255, 0.3)",
                      //   background: "transparent",
                      //   color: "white",
                      // }}
                    />
                    <StarIcon
                      className="star"
                      onClick={() => handleCellClick(dayIndex, planetIndex)}
                    />
                    <span className="gp added">{planet.addedGp}</span>
                    <span className="gp total">{planet.totalGp}</span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog open={open} onClose={handleClose}>
        <OpsView
          selectedDay={selectedDay ?? 0}
          selectedPlanet={selectedPlanet ?? 0}
        />
      </Dialog>
    </div>
  );
};

export default TbOverview;
