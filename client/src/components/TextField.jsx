
export default function TextField(props) {
    // eslint-disable-next-line react/prop-types
    const {label, type,onChange, placeholder, inputstyle, handleSubmit} = props;
  return (
    <div className="flex flex-col pb-8">
        <label htmlFor="textField">{label}</label>
        <input onClick={handleSubmit} onChange={onChange} className={`${inputstyle} mt-1 px-3 py-2 bg-black border shadow-sm border-black placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-white`} type={type} name="textField" id="" placeholder={placeholder} />
        {/* <textarea className="bg-white text-black" name="textField" id="textField" cols={col} rows={row}></textarea> */}
    </div>
  )
}
