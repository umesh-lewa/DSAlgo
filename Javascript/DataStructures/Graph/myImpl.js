
class Graph{

    constructor(noOfVertices){
        this.noOfVertices = this.noOfVertices;
        this.adjList = new Map();
    }


    addVertex(v){
        this.adjList.set(v,[]);
    }

    addEdge(v,w){
        this.adjList.get(v).push(w);

        this.AdjList.get(w).push(v);
    }

    printGraph(){
        let keys = this.adjList.keys();

        for(let i of keys){

            let values = this.adjList.get(i);
            let out = "";

            for(let j of values){
                out += j + " ";
            }

            console.log(i + " -> " + out)
        }

    }
}


let g = new Graph(6);
let ver = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for (var i = 0; i < ver.length; i++) { 
    g.addVertex(ver[i]); 
}

g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F');

g.printGraph();