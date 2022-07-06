// بسم الله الرحمن الرحيم
import NewBlog from '../blogs/NewBlog'
import Notification from '../utils/Notification'
import Button from '../utils/Button'
const User=({handleSignOut,handleSubmit,userData})=>{
    const userCoockie = JSON.parse(userData)
    const userInfo = userCoockie.user?userCoockie.user:null
    let msg=`Welcome ${userInfo['name']} You're in`
    setTimeout(()=>{
        msg=``
    },5000)
    const handleNewBlog=()=>{
        handleSubmit()
    }
    const userStyle=  {"backgroundColor":"limegreen","color":"white","width":"50%","textAlign":"center" ,"borderRadius":"75px 75px"}
return (<>{msg?<Notification msg={msg} error={false}/>:null}
<h3 style={userStyle}>{userInfo.name}</h3>

<Button label={'Logout'} handleMethod={handleSignOut}/ >
    <div>
    {msg?<Notification msg={msg} error={false}/>:null}
        <NewBlog handleNewBlog={handleNewBlog} />
    </div>
</>)
}
export default User