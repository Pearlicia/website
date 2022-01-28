import React, { useContext } from "react";
import { ProModeContext } from "./ProModeContext";

// export class ActionButton extends Component {
//   /* test for using consumer in context */
//   //   render() {
//   //     return (
//   //       <ProModeContext.Consumer>
//   //         {(contextData) => (
//   //           <button onClick={contextData.toggle}>
//   //             {contextData.proModer.toString()}
//   //           </button>
//   //         )}
//   //       </ProModeContext.Consumer>
//   //     );
//   //   }
//   /**testing for simplified api */
//   //   static contextType = ProModeContext;
//   //   render() {
//   //     return (
//   //       <button onClick={this.context.toggle}>
//   //         {this.context.proModer.toString()}
//   //       </button>
//   //     );
//   //   }
// }

export function ActionButton() {
  const context = useContext(ProModeContext);
  return (
    <button onClick={context.toggle}>{context.proModer.toString()}</button>
  );
}
