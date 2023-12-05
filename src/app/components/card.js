export default function Card({
  title = 'Placeholder Title',
  subtitle = 'Placeholder SubTitle',
  description = '',
  image = 'http://placekitten.com/400/300',
}) {
  return (
    <div className="flex">
      <div
        className="my-6 grow max-w-xl border-solid border-2 border-gray-600 rounded-lg bg-gray-100 p-3 hover:bg-emerald-200
      hover:scale-105 transition-all"
      >
        <h1 className="text-center text-3xl font-bold p-1">{title}</h1>
        <h2 className="text-center text-xl text-gray-900 p-1">{subtitle}</h2>
        <img className="mx-auto" src={image} />
        <p className="text-center text-md font-bold">{description}</p>
      </div>
    </div>
  )
}
