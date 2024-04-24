import React from "react";

const UpdateComponent=(OriginalComponent)=>{
    class NewComponent extends React.Component{
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }

        increamentCount=()=>{
            this.setState((prevState)=>{
                return {count: prevState.count+1}
            })
        }

        render(){
            return <OriginalComponent name={"Ajay"} count1={this.state.count} increamentCount1={this.increamentCount}/>
        }
    }
     return NewComponent
}
export default UpdateComponent
