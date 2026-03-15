import { Node } from "./node.js"; 

function knightMoves(startVertex, endVertex){
  const startNode = new Node(startVertex[0], startVertex[1]);
  const endNode = new Node(endVertex[0], endVertex[1]);
  const nodeQueue = [startNode];
  const discoveredNodes = [startNode];

  while(nodeQueue.length > 0){
    const currNode = nodeQueue.pop();
    //if node is equal to the end node, backtrack to the start node.
    if (currNode.isEqual(endNode))
      return shortestPathArray(currNode);
    //find connected nodes
    const adjacentNodes = findAdjacentNodes(currNode);

    //for each node, if it is undiscovered, add it to the queue and add it to discovered nodes.
    for (let i = 0; i < adjacentNodes.length; i++) {
      const node = adjacentNodes[i];
      if (!nodeInArray(node, discoveredNodes))
      {
        discoveredNodes.push(node);
        nodeQueue.unshift(node);
      }
    }
  }
  console.log(discoveredNodes);
}

function shortestPathArray(node){
  let result = [];
  let currNode = node;
  while(currNode !== null){
    result.unshift([currNode.x, currNode.y]);
    currNode = currNode.prev;
  }
  return result;
}

function nodeInArray(node, nodeArray) {
  return nodeArray.some(nodeInArray => nodeInArray.isEqual(node));
}

function findAdjacentNodes(vertex){
  const adjacentTiles = [
    [vertex.x + 1, vertex.y + 2],
    [vertex.x + 2, vertex.y + 1],
    [vertex.x + 2, vertex.y - 1],
    [vertex.x + 1, vertex.y - 2],
    [vertex.x - 1, vertex.y - 2],
    [vertex.x - 2, vertex.y - 1],
    [vertex.x - 2, vertex.y + 1],
    [vertex.x - 1, vertex.y + 2],
  ];

  const adjacentNodes = [];
  adjacentTiles.forEach((tile) => {
    const xPos = tile[0];
    const yPos = tile[1];
    if (xPos >= 0 && xPos < 8 && yPos >= 0 && yPos < 8) 
      adjacentNodes.push(new Node(xPos, yPos, vertex))
  });

  return adjacentNodes;
}
const test = knightMoves([0,0],[7,7]);
console.log(test);
