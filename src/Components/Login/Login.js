import axios from "axios"
import { useState } from "react"
import "./Login.css"
import eye from "../../assets/eye.png"; 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login=()=>{

    const navigate=useNavigate()

    const [email,setemail]=useState("")
    const [password,setPassword]=useState("")
    const [loginErrorMsg,setLoginErrorMsg]=useState("")
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevValue => !prevValue); // Toggle the visibility state
    };
    

    const handleEmail=(e)=>{
        setemail(e.target.value)
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }


    async function handleSubmitLogin(e){
        e.preventDefault();
        const credentials={email,password};
        await axios.post("https://payinstacardapi.onrender.com/api/auth/login",credentials)
            .then((res)=>{
                if(email!=="" && password!==""){
                    const token  = res.data.jwtToken;
                    // Store the JWT token in local storage
                    localStorage.setItem('jwtToken', token);
                    if(res.data.jwtToken){
                        navigate("/homepage")
                     }
                console.log(res.data)}
                if(res.data){
                    return setLoginErrorMsg(res.data)
                }

            })
            .catch((err)=>{
                console.log('Login Failed',err.response.data)
            })
        }

    return(
        <div className="login-main-modal">
            <form className='login-form-modal' onSubmit={handleSubmitLogin}>
                <h1 className='login-modal'>Log in to PayInstaCard</h1>
                <div className='email-box-modal'>
                    <label htmlFor="" className='email-logo-modal1'>Username</label>
                    <input type='email' placeholder='Enter username' name='email' value={email} onChange={handleEmail} className='email-input-modal1'/>
                </div>
                <div className='password-box-modal'>
                    <label htmlFor="" className='password-logo-modal1'>Password</label>
                    <input type={isPasswordVisible ? "text" : "password"} placeholder='Enter password' name='password' value={password} onChange={handlePassword}  className='password-input-modal1'/>
                    <img src={eye} alt="eye" className="eye1" onClick={togglePasswordVisibility}></img>
                </div>
                <p className="errormsg">{loginErrorMsg}</p>
                <button className='login-btn-modal' >Log in</button>
                <p className="login">Don't have an account <Link to="/">Sign up</Link></p>
            </form>
        </div>
    )
}

export default Login
