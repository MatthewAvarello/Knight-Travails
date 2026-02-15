import { isEqual } from "lodash-es"

const POTENTIAL_MOVES = [[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1]]
const BOARDLENGTH = 8
let adjacencyList = generateAdjacencyList()

export function generateAdjacencyList(){
    let adjacencyListGraph = []
    for(let i = 0; BOARDLENGTH > i; i++){
        for (let j = 0; BOARDLENGTH > j; j++){
            let possibleMoves = []
            let cords = [j,i]
            let connectedVerticies = []
            for (const move of POTENTIAL_MOVES) {
                let attempt = [...cords]
                attempt[0] = attempt[0] + move[0]
                attempt[1] = attempt[1] + move[1]
                if (attempt[0] >= BOARDLENGTH || attempt[1] >= BOARDLENGTH || attempt[0] < 0 || attempt[1] < 0){
                    continue
                } else {
                    possibleMoves.push(attempt)
                }
            }
            for (const move of possibleMoves) {
                let number = cordsToIndex(move)
                connectedVerticies.push(number)
            }
            let verticieNumber = (i * BOARDLENGTH) + j
            adjacencyListGraph[verticieNumber] = connectedVerticies;
        }
    }
    return adjacencyListGraph
}
export function cordsToIndex(cords){
    return (cords[1] * BOARDLENGTH) + cords[0]
}
export function indexToCords(index){
    let x = index % BOARDLENGTH
    let y = 0
    for(y; index >= BOARDLENGTH; y++){
        index = index - BOARDLENGTH
    }
    return [x,y]
}
export function knightMoves(startingPosition,desiredPosition){
    if (isEqual(startingPosition,desiredPosition)){
        return "They are the same position!"
    }
    let queue = []
    let info = []
    let visted = new Set()
    let startingIndex = cordsToIndex(startingPosition)
    queue.push(startingIndex)
    while(queue.length){
        let verticieToSearchIndex = queue[0]
        if (verticieToSearchIndex == cordsToIndex(desiredPosition)){
            console.log("found it")
            console.log("Queue before End:")
            console.table(queue)
            console.log("Visted before End:")
            console.log(visted)
            console.log("Info before End")
            console.log(info)
            console.log("test")
            console.log(info[verticieToSearchIndex])
            let finalInfo = []
            let length = 0
            finalInfo.push(verticieToSearchIndex)

            while(finalInfo[finalInfo.length -1] != startingIndex){
                let previous = info[finalInfo[finalInfo.length - 1]]
                finalInfo.push(previous)
                length++
            }

            console.log("FinalInfo:")
            console.log(finalInfo)
            let finalcords = finalInfo.map(indexToCords)
            finalcords.reverse()
            let cordString = finalcords.map(arr => JSON.stringify(arr)).join('\n');
            let message = `You made it in ${length} moves! Heres your path: ${cordString}`

            return message
        }
        adjacencyList[verticieToSearchIndex].forEach(index => {
            if (queue.includes(index) || visted.has(index)){return}
            queue.push(index)
            info[index] = verticieToSearchIndex
        })
        visted.add(verticieToSearchIndex)
        queue.shift()
    }
}