//import logo from './logo.svg';
import './App.css';
// import Hello from './Components/Hello';
// import Welcome from './Components/Welcome';
// import ClickEvent from './Components/ClickEventClass';
// import ClickEventFunction from './Components/ClickEventFunction';
// import ParentClass from './Components/ParentClass';
// import ConditionIf from './Components/ConditionIf';
// import ListRendering from './Components/ListRendering';
import Stylesheet from './Components/Stylesheet';
import './mystylesheet.css'
import Styles from './myStylesheet.module.css'
// import HtmlElement from './Components/HtmlElement'
// import Fragment from './Components/Fragment'
// import MountingLifecycleFirst from './Components/MountingLifeCycle/MountingLifecycleFirst'
// import MountingLifecycleSecond from './Components/MountingLifeCycle/MountingLifecycleSecond'
// import UpdatingLifecycleFirst from './Components/UpdatingLifeCycle/UpdatingLifecycleFirst'
// import UpdatingLifecycleSecond from './Components/UpdatingLifeCycle/UpdatingLifecycleSecond'
// import UpdatingLifecycleThird from './Components/UpdatingLifeCycle/UpdatingLifecycleThird'
// import UnmountingLifecycleFirst from './Components/UnmountingLifeCycle/UnmountingLifecycleFirst'
// import PureParentComponent from './Components/PureComponent/PureParentComponent'
// import MemoComp from './Components/MemoComponent/MemoComp'
// import FromRef from './Components/FormRef/FromRef'
// import FromRefInputParent from './Components/FormRef/FromRefInputParent'
// import PortalsRoot from './Components/Portal/PortalsRoot'
// import ErrorBoundry from './Components/ErrorBoundary/ErrorBoundry'
// import ErrorBoundryChild from './Components/ErrorBoundary/ErrorBoundryChild'
// import ClickCounter from './Components/Hoc/ClickCounter'
// import HoverCounter from './Components/Hoc/HoverCounter'
// import User from './Components/RenderProps/User'
// import ClickCount from './Components/RenderProps/ClickCount'
// import HoverCount from './Components/RenderProps/HoverCount'
// import Counter from './Components/RenderProps/Counter'
// import { UserProvider } from './Components/Context/Context'
// import ContextA from './Components/Context/ContextA'
// import GetDataApi from './Components/axiosApi/GetDataApi'
// import GetDataApi2 from './Components/axiosApi/GetDataApi2'
// import PostDataApi from './Components/axiosApi/PostDataApi'
// import HookCounter from './HooksProp/UseStateHook/HookCounter'
// import HookCounter2 from './HooksProp/UseStateHook/HookCounter2'
// import UseStateObjet from './HooksProp/UseStateHook/UseStateObjet'
// import UseStateArray from './HooksProp/UseStateHook/UseStateArray'
// import UseEffectHookFirst from './HooksProp/UseEffectHook/UseEffectHookFirst'

// import RunEffectOnce from './HooksProp/UseEffectHook/RunEffectOnce'
// import UseEffectCleanup from './HooksProp/UseEffectHook/UseEffectCleanup'
// import UseEffectGetData from './HooksProp/UseEffectHook/UseEffectGetData'
// import UseEffectGetData2 from './HooksProp/UseEffectHook/UseEffectGetData2'

// import ContextComponentA from './HooksProp/UseContextHook/ContextComponentA'

// import SimpleReducer from './HooksProp/UseReducerHook/SimpleReducer'
// import ComplexReducer from './HooksProp/UseReducerHook/ComplexReducer'
// import MultiReducer from './HooksProp/UseReducerHook/MultiReducer'
// import UseReducerWithUseContext from './HooksProp/UseReducerHook/UseReducerWithUseContext'
// import GetDataReducer from './HooksProp/UseReducerHook/GetDataReducer'

// import UseCallBackHook from './HooksProp/useCallBackHook/UseCallBackHook'

//import UseMemoHook from './HooksProp/useMemoHook/UseMemoHook'

import BasicRoute from './routing/basicRouting/BasicRoute'
import UrlParameter from './routing/basicRouting/UrlParameter'
import RedirectAuth from './routing/basicRouting/RedirectAuth'

function App() {
  const carinfo = { name: "Ford", model: "Mustang" }
  return (
    <div className="App">

      <RedirectAuth />
      {/* <UrlParameter /> */}
      {/* <BasicRoute /> */}

      {/* <UseMemoHook /> */}

      {/* <UseCallBackHook /> */}

      {/* <GetDataReducer /> */}
      {/* <UseReducerWithUseContext /> */}
      {/* <MultiReducer /> */}
      {/* <ComplexReducer /> */}
      {/* <SimpleReducer /> */}


      {/* <ContextComponentA /> */}


      {/* <UseEffectGetData2 /> */}
      {/* <UseEffectGetData /> */}
      {/* <UseEffectCleanup /> */}
      {/* <RunEffectOnce /> */}
      {/* <UseEffectHookFirst /> */}


      {/* <UseStateArray /> */}
      {/* <UseStateObjet /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter /> */}


      {/* <PostDataApi /> */}

      {/* <GetDataApi2 />
      <GetDataApi /> */}

      {/* <UserProvider value={carinfo}>
        <ContextA />
      </UserProvider> */}

      {/* <Counter increBy={5} render={(count, incrementCount) => <ClickCount count={count} incrementCount={incrementCount} />} />
      <Counter increBy={10} render={(count, incrementCount, test) => <HoverCount test={test} count={count} incrementCount={incrementCount} />} />
      <User name={(msg) => msg} /> */}

      {/* <ClickCounter name="Neeraj" />
      <HoverCounter name="Neeraj" /> */}

      {/* <ErrorBoundry>
        <ErrorBoundryChild hero='superman' />
      </ErrorBoundry>
      <ErrorBoundry>
        <ErrorBoundryChild hero='spiderman' />
      </ErrorBoundry>
      <ErrorBoundry>
        <ErrorBoundryChild hero='jocker' />
      </ErrorBoundry> */}

      {/* <PortalsRoot /> */}

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
