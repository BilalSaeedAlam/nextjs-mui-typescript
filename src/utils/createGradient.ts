export function createGradient(color1: any, color2: any) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

export function createCustomGradient(
  degree: any,
  color1: any,
  colorOnePercentage: any,
  color2: any,
  colorTwoPercentage: any
) {
  return `linear-gradient(${degree}, ${color1} ${colorOnePercentage}, ${color2} ${colorTwoPercentage})`;
}
