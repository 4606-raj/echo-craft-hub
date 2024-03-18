export default function TextInput({label, labelClassList, name, classList, type = 'text'}) {
    return (
        <div className="mb-4">
            <label htmlFor="username" className={labelClassList}>{label}</label>
            <input type={type} className={classList} id={name} name={name} placeholder={name} required />
        </div>
    )
}