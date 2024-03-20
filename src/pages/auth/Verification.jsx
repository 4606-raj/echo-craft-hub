import background from "../../assets/images/auth-backgrounds/verification.jpeg";
import TextInput from "../../components/form-elements/TextInput";
import Button from "../../components/ui/Button";
import { useEffect } from "react";

export default function Verification() {
    
    useEffect(() => {
        document.title = 'Verify | Echo Craft Hub';
    }, [])
    
    return (
        <div>
            <div className="flex">
                <div className="relative w-1/2 bg-cover bg-center" style={{backgroundImage: `url(${background})`}}>
                </div>
                <div className="relative w-1/2">
                    <div className="px-40 bg-white w-100 h-screen pt-10">
                        <form id="signup-form">
                            <h2 className="text-2xl font-semibold mb-4">Verification</h2>
                            <p>Verfiy your code</p>

                            <TextInput 
                                label="Code:" 
                                name="code" 
                                placeholder="Code" 
                                className="w-full p-2 border rounded-md"
                                type="number"
                            />

                            <Button
                                className='w-1/4 px-4 py-2'
                                type="submit"
                                text='Verify Code'
                            />
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}