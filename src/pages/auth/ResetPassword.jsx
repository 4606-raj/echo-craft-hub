import { Link } from "react-router-dom";
import background from "../../assets/images/auth-backgrounds/reset-password.jpeg";
import TextInput from "../../components/form-elements/TextInput";
import Button from "../../components/ui/Button";
import { useEffect } from "react";

export default function ResetPassword() {

    useEffect(() => {
        document.title = 'Reset Password | Echo Craft Hub';
    }, [])
    
    return (
        <div>
            <div className="flex">
                <div className="relative w-1/2 bg-cover bg-center" style={{backgroundImage: `url(${background})`}}>
                </div>
                <div className="relative w-1/2">
                    <div className="px-40 bg-white w-100 h-screen pt-10">
                        <form id="signup-form">
                            <h2 className="text-2xl font-semibold mb-4">Reset Your Password</h2>
                            <p>Enter your email and we will send you a link to reset your password.</p>

                            <TextInput 
                                label="Email:"
                                name="email" 
                                placeholder="Email"
                                className="w-full p-2 border rounded-md"
                                type="email"
                            />

                            <Button
                                className='w-1/4 px-4 py-2'
                                type="submit"
                                text='Send'
                            />

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