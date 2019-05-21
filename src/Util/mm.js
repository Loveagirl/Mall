class MUtil{
    request(param){
       return new Promise((resolve,reject)=>{
        $.ajax({
           type : param.type || 'get',
           data : param.data || null,
           dataType    : param.dataType    || 'json',
           success : res=>{
             
           },
           error   : err=>{
               reject(err)
           } 
        })
       }) 
    }
}