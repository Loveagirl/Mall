import React,{Component} from 'react'
import {connect} from 'react-redux'
import {actionCreator} from './Store'
class Login extends Component{
    render(){
        return(
         
               <div className="col-md-4 col-md-offset-4" style={{marginTop:150}}>
                   <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Login</h3>
                </div>
                <div className="panel-body">
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-sm-12">
                        <input type="email" defaultValue={this.props.username} className="form-control"  placeholder="Username" onChange={this.props.handleInputChange} name="username" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                        <input type="password"  value={this.props.password} className="form-control"  placeholder="Password" onChange={this.props.handleInputChange} name="password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className=" col-sm-12">
                        <button type="submit" className="btn btn-default btn-info btn-block">Sign in</button>
                        </div>
                    </div>
                  </form>
                </div>
                </div>
               </div>
        )
    }
}
 const mapState = (state)=>({
     username:state.getIn(['login','username']),
     password:state.getIn(['login','password'])
 })
const mapDispatch=(dispatch)=>{
    return{
        handleInputChange(e){
            console.log(e.target.name)
           dispatch(actionCreator.change_name(e.target.value,e.target.name))
        }
    }
}

export default connect(mapState,mapDispatch)(Login)