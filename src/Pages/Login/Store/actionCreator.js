import {constans} from './index'

export const change_name=(value,name)=>({
   type:constans.CHANGEINPUT,
    value,
    name
})