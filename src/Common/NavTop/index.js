import React,{Component} from 'react'

class NavTop extends Component{
   render(){
       return(
        <div className="navbar navbar-default top-navbar" role="navigation">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html"><b>In</b>sight</a>
        </div>

        <ul className="nav navbar-top-links navbar-right">
       
            <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="/" aria-expanded="false">
                    <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-user">
                   
                    <li><a href="/"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                    </li>
                </ul>
               
            </li>
         
        </ul>
    </div> 
       )
   }
}

export default NavTop