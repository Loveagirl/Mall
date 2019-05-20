import React,{Component} from 'react'
import './style.css'
import NavTop from '../NavTop'
import NavSide from '../NavSide'
import Product from '../../Pages/Product'
import { Route  } from 'react-router-dom'
class Layout extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return(
            <div id="wrapper">
              <NavTop/>
              <NavSide/>
              <div id="page-wrapper">
              
                   {this.props.children}
              
              </div>
            </div>
        )
    }
}

export default Layout