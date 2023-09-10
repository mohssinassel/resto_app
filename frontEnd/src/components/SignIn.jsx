import '../styles/Sign.css'
const SignIn = ({ toggleComponent }) => {
    return (
        <div className="SignInContainer">
            
            <h2 >Sign In</h2>
            <h3>write your information here</h3>
            <div className='formContainerSignIn'>
                <form action="" className='formSignIn'>
                    <input type="text" placeholder='username'/>
                    <input type="password" placeholder='password'/>
                    <button className='submitSignIn'>Submit</button>
                </form>
                <div style={{ textAlign: 'center' ,marginTop:'10px' , cursor:'pointer'}} onClick={toggleComponent}>Don&apos;t have an account ? </div>
            </div>
            
        </div>

    )}
export default SignIn