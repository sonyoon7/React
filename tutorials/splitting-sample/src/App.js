import logo from './logo.svg';
import './App.css';
import React, { useState, Suspense } from 'react'
import loadable from '@loadable/component'

// const SplitMe =React.lazy(()=>import('./SplitMe'))
const SplitMe = loadable(() =>import('./SplitMe'),{
  fallback: <div>loading....</div>
})
const App = () => {

  const [visible, setVisible] =useState(false);
  const onClick =()=>{
    setVisible(true)
  }

  const onMouseOver = () =>{
    SplitMe.preload();
  }

  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p onClick={onClick} onMouseOver={onMouseOver}>
        Hello React! 
      </p>
      {/* <Suspense fallback={<div>loading........</div>}> */}
        {visible && <SplitMe/>}
      {/* </Suspense> */}
    </header>
  </div>
  );
};

export default App;

// export default class App extends Component {

//   state={
//     SplitMe: null
//   }

//   handleClick =async()=>{
//     const loadedModule = await import("./SpiltMe");
//     this.setState({
//       SplitMe: loadedModule.default
//     })
//   }

//   render() {
//     const {SplitMe} = this.state;

//     return (
    //   <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p onClick={this.handleClick}>
    //       Hello React! 
     
    //     </p>
    //     {SplitMe && <SplitMe/>}
    //   </header>
    // </div>
//     )
//   }
// }

