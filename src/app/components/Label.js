export default function Label({ htmlFor, label }) {
  return (
    <label className="text-emerald-100 text-lg" htmlFor={htmlFor}>
      {label}
    </label>
  )
}
