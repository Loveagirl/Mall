import React,{Component} from 'react'

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
                        <input type="email" className="form-control"  placeholder="Username"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                        <input type="password" className="form-control"  placeholder="Password" />
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

export default Login