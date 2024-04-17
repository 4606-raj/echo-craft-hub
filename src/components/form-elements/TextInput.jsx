export default function TextInput({label, type = 'text', ...props}) {
    return (
        <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm mb-2">{label}</label>
            <input type={type} {...props} required />
        </div>
    )
}