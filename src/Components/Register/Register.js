import {useState} from "react"
import axios from "axios"
import "../Register/Register.css"
import eye from "../../assets/eye.png"; 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Register=()=>{
    const navigate=useNavigate()
    const [SigninErrorMsg,setSigninErrorMsg]=useState("")


    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevValue => !prevValue); // Toggle the visibility state
    };

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };


    const handleSubmitRegister=async (e)=>{
        e.preventDefault()
        try{
            await axios.post("https://payinstacardapi.onrender.com/api/auth/register",formData)
            .then((res)=>{
                    if(formData.email!=="" && formData.password!==""){
                        const token  = res.data.jwtToken;
                        // Store the JWT token in local storage
                        localStorage.setItem('jwtToken', token);
                        if(res.data.token){
                            navigate("/homepage")
                        }
                        console.log(res.data)
                }
                    if(res.data){
                        return setSigninErrorMsg(res.data)
                    }
            })
        }
        catch(error){
            console.log(error)
        }
    }
    return(
        <div className="signup-main-modal">
            <h1 className='signup-modal'>Register to PayInstaCard</h1>
            <form className='signup-form-modal' onSubmit={handleSubmitRegister}>
                <div className='email-box-signup-modal'>
                    <label htmlFor="" className='email-logo-modal'>Username</label>
                    <input type='email' placeholder='Enter username' name='email' value={formData.email} className='email-input-modal' onChange={handleChange}/>
                </div>
                <div className='password-box-signup-modal'>
                    <label htmlFor="" className='password-logo-modal'>Password</label>
                    <input type={isPasswordVisible ? "text" : "password"} placeholder='Enter password' name='password' value={formData.password}  className='password-input-modal' onChange={handleChange}/>
                    <img src={eye} alt="eye" className="eye" onClick={togglePasswordVisibility}></img>
                </div>
                <p className="errormsg">{SigninErrorMsg}</p>
                <button className='signup-btn-modal' type="submit">Register</button>
                <p className="login">Already have an account <Link to="/Login" >Login</Link></p>
            </form>
        </div>
    )
}
export default Register

