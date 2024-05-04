import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    state={eInput:"",pInput:""}

    onChangeEmail = (e) => {
        const {eInput}=this.state
        this.setState({ eInput: e.target.value });
        console.log(eInput)
      };
    
      onChangePassword = (e) => {
        const {pInput}=this.state
        this.setState({ pInput: e.target.value });
        console.log(pInput)
      };

      onSubmitSuccess = (jwtToken,uId) => {
        const {history} = this.props
    
        Cookies.set('jwt_token', jwtToken, {
          expires: 30,
          path: '/',
        })
        Cookies.set('uid', uId, {
            expires: 30,
            path: '/',
          })
        history.replace('/')
      }

      onSub=async(e)=>{
        e.preventDefault()
        const {eInput,pInput}=this.state
        try {
            console.log(eInput,pInput)
            const response = await fetch("https://apin.abhiramreddy.shop/ec/user/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: eInput,
                password: pInput,
              }),
            });
        
            if (response.ok) {
              const data = await response.json();
              console.log("Login successful:", data);
              console.log(data.token)
              this.onSubmitSuccess(data.token,data.user_id)
        
              
            } else {
              const errorData = await response.json();
              console.error("Login failed:", errorData.error);
        
              
            }
          } catch (error) {
            console.error("Error during login:", error.message);
            
          }
      }

    render(){
        const jwtToken = Cookies.get('jwt_token')
        if (jwtToken !== undefined) {
        return <Redirect to="/" />
        }
        return(
            <div className="bg-black w-screen h-screen p-5 flex flex-row items-center justify-center">
                <div className="flex items-center bg-white justify-center px-4 py-5 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <div className="mb-2 flex justify-center">
                            <img className='w-48 mb-6' src='https://res.cloudinary.com/dbs6hvga4/image/upload/v1708281057/Grocify-logos_black_copy_dvdsbh.png'/>
                        </div>
                        <h2 className="text-center text-2xl font-bold leading-tight text-black">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 ">
                            Don&apos;t have an account?{' '}
                            <a
                            href="/signup"
                            title=""
                            className="font-semibold text-black transition-all duration-200 hover:underline"
                            >
                            Create a free account
                            </a>
                        </p>
                        <form onSubmit={this.onSub} className="mt-8">
                            <div className="space-y-5">
                            <div>
                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                {' '}
                                Email address{' '}
                                </label>
                                <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="email"
                                    placeholder="Email"
                                    onChange={this.onChangeEmail}
                                ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                    {' '}
                                    Password{' '}
                                </label>
                                
                                </div>
                                <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="password"
                                    placeholder="Password"
                                    onChange={this.onChangePassword}
                                ></input>
                                </div>
                            </div>
                            <div>
                                <button
                                type="button"
                                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                onClick={this.onSub}
                                >
                                Sign In
                                </button>
                            </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Login