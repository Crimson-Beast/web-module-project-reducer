# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

when the 1 button is pressed an event fires off the dispatch function of addOne withing the reducer, addOne's function is to call the action of ADD_ONE which then reveals the case of ADD_ONE to the reducer, reducer then now understands which case is active and replace state with a copy and then add 1 to the state.


* The user presses the 1 button.
* 
...

* TotalDisplay shows the total plus 1.
