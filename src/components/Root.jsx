import React from "react";
import Timer from "./timer/Timer";
import { TriangleWithInput, TriangleStateful } from "./lifecycle/Triangle";
import LifecycleLogger from "./lifecycle/LifecycleLogger";

window.reactTimerComponent = Timer;
window.reactTimerElement = <Timer />;
window.manualTimerElement = {
  $$typeof: Symbol.for("react.element"),
  key: null,
  ref: null,
  props: {},
  type: window.reactTimerComponent,
  _owner: null,
  _store: { validated: false },
  _self: null,
  _source: null
};

function Root(props) {
  return (
    <div>
      HOLA {props.name}, SOY UN COMPONENTE REACT con archivo propio<br />
      <Timer
        render={time => {
          return <LifecycleLogger constant={true} value={time} />;
        }}
      />
      {/* React.createElement(Timer) == { component: Timer } */}
    </div>
  );
}

export default Root;
//<Triangle baseSize={3}>*</Triangle>
