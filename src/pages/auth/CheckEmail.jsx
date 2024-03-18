import { Link } from "react-router-dom";
import background from "../../assets/images/auth-backgrounds/check-email.jpeg";

export default function CheckEmail() {
    return (
        <div>
            <div className="flex">
                <div className="relative w-1/2 bg-cover bg-center" style={{backgroundImage: `url(${background})`}}>
                </div>
                <div className="relative w-1/2">
                    <div className="px-40 bg-white w-100 h-screen pt-10">
                        <form id="signup-form">
                            <h2 className="text-2xl font-semibold mb-4">Check Email</h2>
                            <p>
                                Please check your email inbox and click on the provided link to reset your password. If you didn't receive email, 
                                <Link className="text-primary" to={'#'}> Click here to resend</Link>
                            </p>

                            <div className="mt-4">
                                <label htmlFor="password" className="block text-gray-700 text-sm mb-2">
                                Back to <Link to={'/sign-up'} className="underline">Login</Link>
                                </label>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}