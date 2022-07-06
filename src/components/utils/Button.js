// بسم الله الرحمن الرحيم
const Button = ({label,handleMethod})=>{
    const buttonStyle={"width":"25%" ,"height":"75%"}
    return <button style={buttonStyle} onClick={handleMethod}>{label}</button>
}
export default Button