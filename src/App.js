import React from 'react';
import { useReducer } from 'react';
import './App.css';
import reducer, { initialState } from './reducers';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { addOne, applyNumber, changeOperation, clearDisplay, setMemory, clearMem } from './actions/index'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={(e) => dispatch(setMemory(state.total))} value={"M+"}/>
              <CalcButton onClick={(e) => dispatch(applyNumber(state.memory))} value={"MR"}/>
              <CalcButton onClick={(e) => dispatch(clearMem(state.memory))} value={"MC"}/>
            </div>

            <div className="row">
              {/* <CalcButton onClick={(e) => dispatch(addOne())} value={1}/> */}
              <CalcButton onClick={(e) => dispatch(applyNumber(1))} value={1}/>
              <CalcButton onClick={(e) => dispatch(applyNumber(2))} value={2}/>
              <CalcButton onClick={(e) => dispatch(applyNumber(3))} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={(e) => dispatch(applyNumber(4))} value={4}/>
              <CalcButton onClick={(e) => dispatch(applyNumber(5))} value={5}/>
              <CalcButton onClick={(e) => dispatch(applyNumber(6))} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={(e) => dispatch(applyNumber(7))} value={7}/>
              <CalcButton onClick={(e) => dispatch(applyNumber(8))} value={8}/>
              <CalcButton onClick={(e) => dispatch(applyNumber(9))} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={(e) => dispatch(changeOperation('+'))} value={"+"}/>
              <CalcButton onClick={(e) => dispatch(changeOperation('*'))} value={"*"}/>
              <CalcButton onClick={(e) => dispatch(changeOperation('-'))} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={(e) => dispatch(clearDisplay())} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;




//(e) => dispatch()