import '../styles/Sign.css'
const SignUp = ({ toggleComponent }) => {
    return (
        <div className="SignInContainer">
            <h2>Sign Up</h2>
            <h3>You can create New Account Here</h3>
            <div className='formContainerSignUp'>
                <form action="" className='formSignIn'>
                    <input type='text' placeholder='First Name'/>
                    <input type='text' placeholder='Last Name'/>
                    <input type="text" placeholder='Username'/>
                    <input type="password" placeholder='password'/>
                    <button className='submitSignIn'>Submit</button>
                    <div style={{ textAlign: 'center' ,marginTop:'10px' , cursor:'pointer'}} onClick={toggleComponent}>Have an account?</div>
                </form>
            </div>
        </div>

    )}
export default SignUp