export default function Button({ children, onClick, type }) {
  return (
    <button
      className="px-4 py-2 bg-emerald-800 rounded-md shadow-md text-emerald-100 hover:bg-emerald-800 active:bg-emerald-900 transition-all"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
