import background from "../../assets/images/auth-backgrounds/create-password.jpeg";
import TextInput from "../../components/form-elements/TextInput";
import Button from "../../components/ui/Button";
import { useEffect } from "react";

export default function CreatePassword() {

    useEffect(() => {
        document.title = 'Create Password | Echo Craft Hub';
    }, [])
    
    return (
        <div>
            <div className="flex">
                <div className="relative w-1/2 bg-cover bg-center" style={{backgroundImage: `url(${background})`}}>
                </div>
                <div className="relative w-1/2">
                    <div className="px-40 bg-white w-100 h-screen pt-10">
                        <form id="signup-form">
                            <h2 className="text-2xl font-semibold mb-4">Create New Password</h2>
                            <p className="mb-10">Your new password must be different from previous used passowrds.</p>

                            <TextInput 
                                label="Passowrd:"
                                labelClassList="block text-gray-700 text-sm mb-2" 
                                name="passowrd" 
                                classList="w-full p-2 border rounded-md"
                                type="passowrd"
                            />

                            <TextInput 
                                label="Confirm Passowrd:"
                                labelClassList="block text-gray-700 text-sm mb-2" 
                                name="passowrd_confirmation" 
                                classList="w-full p-2 border rounded-md"
                                type="passowrd"
                            />

                            <Button
                                className='w-4/12 px-4 py-2'
                                type="submit"
                                text='Reset Password'
                            />
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}