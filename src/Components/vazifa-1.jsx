import { Component } from "react";
import './vazifa-1.css'

class LargeMedium extends Component{
    constructor(props){
        super(props);
        this.state={
            width:'100px',
            height:'100px'
        }
    }
    render(){
        const Sircle=()=>{
            if(this.props.size==="Small"){
                this.setState({width:'150px', height:'150px'})
            }
            if(this.props.size==="Medium"){
                this.setState({width:'200px', height:'200px'})
            }
            if(this.props.size==="Large"){
                this.setState({width:'250px', height:'250px'})
            }
        }
        const Restart=()=>{
            this.setState({width:'100px', height:'100px'});
        }
        return(
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div className='sircle' onClick={Sircle} style={{width:this.state.width, 
                height:this.state.height, transition: "all 1s"}}>{this.props.size}</div>
            <button style={{backgroundColor:'blue', color:'red',
             fontSize:'28px', padding:'7px', borderRadius:'14px'}} onClick={Restart}>Restart</button>
            </div>
        )
    }

}
export default LargeMedium;