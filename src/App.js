import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import Welcome from './Components/Welcome';
import ClickEvent from './Components/ClickEventClass';
import ClickEventFunction from './Components/ClickEventFunction';
import ParentClass from './Components/ParentClass';
import ConditionIf from './Components/ConditionIf';
import ListRendering from './Components/ListRendering';
import Stylesheet from './Components/Stylesheet';
import './mystylesheet.css'
import Styles from './myStylesheet.module.css'
import HtmlElement from './Components/HtmlElement'
import Fragment from './Components/Fragment'
import MountingLifecycleFirst from './Components/MountingLifecycleFirst'
import MountingLifecycleSecond from './Components/MountingLifecycleSecond'
import UpdatingLifecycleFirst from './Components/UpdatingLifecycleFirst'
import UpdatingLifecycleSecond from './Components/UpdatingLifecycleSecond'
import UpdatingLifecycleThird from './Components/UpdatingLifecycleThird'
import UnmountingLifecycleFirst from './Components/UnmountingLifecycleFirst'
import PureParentComponent from './Components/PureParentComponent'
import MemoComp from './Components/MemoComp'
import FromRef from './Components/FromRef'
import FromRefInputParent from './Components/FromRefInputParent'
import PortalsRoot from './Components/PortalsRoot'


// pureconponent is class base components
// memo component is function base components

function App() {
  const carinfo = { name: "Ford", model: "Mustang" }
  return (
    <div className="App">
      <PortalsRoot />
      {/* <FromRefInputParent /> */}
      {/* <FromRef /> */}
      {/* <MemoComp /> */}
      {/* <PureParentComponent /> */}
      {/* <UnmountingLifecycleFirst /> */}
      {/* <UpdatingLifecycleThird /> */}
      {/* <UpdatingLifecycleSecond /> */}
      {/* <UpdatingLifecycleFirst /> */}
      {/* <MountingLifecycleSecond favcol='Green' /> */}
      {/* <MountingLifecycleFirst favcol='Green' /> */}
      {/* <Fragment /> */}
      {/* <HtmlElement /> */}
      {/* <Stylesheet styleName = {true}/> */}
      {/* <h1 className={Styles.success}>Success</h1> */}
      {/* <ListRendering /> */}
      {/* <ConditionIf /> */}
      {/* <ParentClass /> */}
      {/* <ClickEventFunction /> */}
      {/* <ClickEvent /> */}
      {/* < Hello carinfo={carinfo} /> */}
      {/* <Welcome carinfo={carinfo} /> */}
    </div>
  );
}

export default App;
