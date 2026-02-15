const POTENTIAL_MOVES = [[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1]]
const BOARDLENGTH = 8
let adjacencyList = generateAdjacencyList()

export function generateAdjacencyList(){
    let adjacencyListGraph = []
    for(let i = 0; BOARDLENGTH >= i; i++){
        for (let j = 0; BOARDLENGTH >= j; j++){
            let possibleMoves = []
            let cords = [j,i]
            let connectedVerticies = []
            for (const move of POTENTIAL_MOVES) {
                let attempt = [...cords]
                attempt[0] = attempt[0] + move[0]
                attempt[1] = attempt[1] + move[1]
                if (attempt[0] >= BOARDLENGTH || attempt[1] >= BOARDLENGTH || attempt[0] <= 0 || attempt[1] <= 0){
                    continue
                } else {
                    possibleMoves.push(attempt)
                }
            }
            for (const move of possibleMoves) {
                let number = (move[1] * 8) + move[0]
                connectedVerticies.push(number)
            }
            let verticieNumber = (i * 8) + j
            adjacencyListGraph[verticieNumber] = connectedVerticies;
        }
    }
    return adjacencyListGraph
}
export function knightMoves(startingPosition,desiredPosition){
    console.log(test)
}