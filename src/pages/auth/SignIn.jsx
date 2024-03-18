import background from "../../assets/images/auth-backgrounds/signin-bg.jpeg";
import TextInput from "../../components/form-elements/TextInput";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import google from '../../assets/google.svg'
import facebook from '../../assets/facebook.svg'
import { useEffect } from "react";


export default function SignIp() {

    useEffect(() => {
        document.title = 'Sign In | Echo Craft Hub';
    }, [])
    
    return (
        <div>
            <div className="flex">
                <div className="relative w-1/2 bg-cover bg-center" style={{backgroundImage: `url(${background})`}}>
                </div>
                <div className="relative w-1/2">
                    <div className="px-40 bg-white w-100 h-screen pt-10">
                        <form id="signup-form">
                            <h2 className="text-2xl font-semibold mb-4">Sign In</h2>


                            <Button 
                                variant={'outlined'}
                                startIcon={<img src={google} width="24" height="24"/>}
                                text={'Continue With Google'}
                            />
                            <Button 
                                variant={'outlined'}
                                startIcon={<img src={facebook} width="22" height="22"/>}
                                text={'Continue With Facebook'}
                            />

                            <div className="relative inline-flex items-center justify-center w-full">
                                <hr className="w-full my-8" style={{color: '#95A5A6'}}/>
                                <div className="absolute text-center font-medium text-gray-500 left-1/2 transform -translate-x-1/2 bg-white px-2" style={{background: 'white'}}>OR</div>
                            </div>
                            
                            <TextInput 
                                label="Email:"
                                labelClassList="block text-gray-700 text-sm mb-2" 
                                name="email" 
                                classList="w-full p-2 border rounded-md"
                            />

                            <TextInput 
                                label="Password:"
                                labelClassList="block text-gray-700 text-sm mb-2" 
                                name="password" 
                                classList="w-full p-2 border rounded-md"
                                type="password"
                            />

                            <div className="mt-4 text-end">
                                <label htmlFor="password" className="block text-gray-700 text-sm mb-2">
                                    <Link to={'/reset-password'} className="underline">Forgot Your Password ?</Link>
                                </label>
                            </div>

                            <Button
                                className='w-1/4 px-10 py-2'
                                type="submit"
                                text='Sign In'
                            />

                            <div className="mt-4">
                                <label htmlFor="password" className="block text-gray-700 text-sm mb-2">
                                    Don't Have An Accound? <Link to={'/sign-up'} className="underline">Sign Up</Link>
                                </label>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}