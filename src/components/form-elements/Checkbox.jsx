export default function Checkbox({label, labelClassList, name, classList}) {
    <div className="mb-4">
        <label htmlFor="password" className={labelClassList}>
            <input type="checkbox" className={classList} name={name} required />
            {label}
        </label>
    </div>
}