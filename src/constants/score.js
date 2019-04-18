/**
 * S1: 1
 * S2: 2
 * ...
 * S20: 20
 *
 * D1: 2
 * D2: 4
 * ...
 * D20: 40
 *
 * T1: 3
 * T2: 6
 * ...
 * T20: 60
 */
const points = {}
for (let i = 1; i <= 20; i++) {
  points[`S${i}`] = i
}
for (let i = 1; i <= 20; i++) {
  points[`D${i}`] = i * 2
}
for (let i = 1; i <= 20; i++) {
  points[`T${i}`] = i * 3
}
points['M'] = 0 // Miss
points['SB'] = 25 // Single Bull
points['DB'] = 50 // Double Bull
export default points
