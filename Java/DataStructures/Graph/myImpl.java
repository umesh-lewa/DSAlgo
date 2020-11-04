import java.util.*;

class Graph{

    static void adddEdge(ArrayList<ArrayList<Integer>> adj, int u, int v){
        adj.get(u).add(v);
        adj.get(v).add(u);
    }

    static void printGraph(ArrayList<ArrayList<Integer>> adj){
        for(int i = 0 ; i < adj.size() ; i++){
            System.out.println("\nAdjacency list of vertex" + i);
            System.out.print("head");
            for(int j = 0 ; j < adj.get(i).size() ; j++){
                System.out.println(" -> " + adj.get(i).get(j));
            }
            System.out.println();
        }
    }
}

public class myImpl {

    public static void main(int  args[]){
        // Driver code
        int V =5;
        ArrayList<ArrayList<Integer>> adj = new ArrayList<ArrayList<Integer>>(V);
        // the data variable adj in maintained in driver code
        for(int i = 0 ; i < V ; i++){
            adj.add(new ArrayList());
        }

        addEdge(adj,0,1);
        addEdge(adj,0,4);
        addEdge(adj,1,2);
        addEdge(adj,1,3);
        addEdge(adj,1,4);
        addEdge(adj,2,3);
        addEdge(adj,3,4);

        printGraph(adj);
    }
    
}
