export type CoordArray = [number, number];

/**
 * Calculate distance between two coordinates, this is a fast aproximation
 * @param coordA
 * @param coordB
 * @returns
 */
export function geoDistance(coordA: CoordArray, coordB: CoordArray) {
	const R = 6371;

	// φ, λ in radians
	const φ1 = (coordA[1] * Math.PI) / 180;
	const φ2 = (coordB[1] * Math.PI) / 180;
	const Δφ = φ2 - φ1;
	const Δλ = ((coordB[0] - coordA[0]) * Math.PI) / 180;

	const x = Δλ * Math.cos((φ1 + φ2) / 2);
	const y = Δφ;

	return Math.sqrt(x * x + y * y) * R;
}
