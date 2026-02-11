import { devIcon } from "leaflet";

export const getIcon = (direction) => {
  return devIcon({
    html: `
    <div> <img src= "/plane.svg" width="30px" height="30px" /> 
    </div>`,
    iconSize: [30, 30],
    className: "marker",
  });
};
