import { knightMoves, generateAdjacencyList,cordsToIndex, indexToCords } from "./knightMoves.js";

console.table(generateAdjacencyList())
console.log(cordsToIndex([0,1]))
console.log(indexToCords(29))
console.log(knightMoves([7,7],[0,0]))