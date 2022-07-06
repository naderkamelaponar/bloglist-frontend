// بسم الله الرحمن الرحيم

const Succeded = ({msg})=>{
    const hStyle={"backgroundColor":"green","color":"white"}
    return <h4 ><b style={hStyle}>{msg}</b></h4>
}
const Failure = ({msg})=>{
    const hStyle={"backgroundColor":"red","color":"white"}
    return <h4 ><b style={hStyle}>{msg}</b></h4>
}
const Notification = ({error,msg})=>{
   
    return error? <Failure msg={msg}/>:<Succeded msg={msg}/>
    
}
export default Notification
