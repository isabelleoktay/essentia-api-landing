import * as d3 from "d3";

// returns `count` colours interpolated between white→base (when lighten=true)
// or base→black (when lighten=false)
function makeShades(base, count, lighten = true) {
  const target = lighten ? "#ffffff" : "#000000";
  // quantize will sample `count` evenly from t=0…1
  return d3.quantize((t) => d3.interpolateLab(target, base)(t), count);
}

// 5 tints of coral (#e53845) and 5 shades of bright‐blue (#320bff)
// export const coralTints = makeShades("#e53845", 10, true);
export const blueShades = makeShades("#320bff", 10, true);

// your full custom ordinal scheme
export const customScheme = [...blueShades];

// helper to get an ordinal scale anywhere
export function customColorScale(domain = []) {
  return d3.scaleOrdinal().domain(domain).range(customScheme);
}
