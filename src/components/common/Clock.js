import React from "react";
import useClock from "../../hooks/useClock";

//we can be write custom hook
//-> useClock in hooks
function Clock() {
  const time = useClock();
  return <div>{time}</div>;
}

Clock.propTypes = {};

export default Clock;
