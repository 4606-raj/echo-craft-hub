import background from "../../assets/images/auth-backgrounds/signup-bg.jpeg";
import TextInput from "../../components/form-elements/TextInput";
import Checkbox from "../../components/form-elements/Checkbox";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import google from '../../assets/google.svg'
import facebook from '../../assets/facebook.svg'


export default function SignUp() {
    return (
        <div>

            <div className="flex">
                <div className="relative w-1/2 bg-cover bg-center" style={{backgroundImage: `url(${background})`}}>
                </div>
                <div className="relative w-1/2">
                    <div className="px-40 bg-white w-100 h-screen pt-10">
                        <form id="signup-form">
                            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

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
                                label="Username:"
                                labelClassList="block text-gray-700 text-sm mb-2" 
                                name="username" 
                                classList="w-full p-2 border rounded-md"
                            />

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

                            <TextInput 
                                label="Confirm Password:"
                                labelClassList="block text-gray-700 text-sm mb-2" 
                                name="password_confirmation" 
                                classList="w-full p-2 border rounded-md"
                                type="password"
                            />

                            <Checkbox
                                label="Agree to Terms and Conditions"
                                labelClassList="block text-gray-700 text-sm mb-2" 
                                name="term_and_conditions" 
                                classList="border rounded-md"
                            />

                            <Button
                                className='w-1/4 px-10 py-2'
                                type="submit"
                                text='Sign Up'
                            />

                            <div className="mt-4">
                                <label htmlFor="password" className="block text-gray-700 text-sm mb-2">
                                Already Have An Accound? <Link to={'/sign-in'} className="underline">Sing In</Link>
                                </label>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}