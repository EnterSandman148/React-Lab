import { BeakerIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/solid'

const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Anatomy',
    href: '/anatomy',
  },
  {
    title: 'History',
    href: '/history',
  },
  {
    title: 'Behavior',
    href: '/behavior',
  },
  {
    title: 'Conservation',
    href: '/conservation',
  },
]

export default function Navbar() {
  return (
    <div className="flex justify-between align-center items-center gap-6 m-12">
      <a href="/">
        <img
          src="./icon.png"
          className="bg-gray-100 px-3 hover:bg-emerald-200 active:bg-emerald-500 transition-all shadow-md rounded-md"
          width={75}
          height={75}
          alt="All About Elephants"
        ></img>
      </a>
      <h1 className="text-5xl mr-40 font-bold text-slate-100">All About Elephants</h1>
      <div className="flex gap-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-4 py-2 bg-gray-100 shadow-md rounded-md text-lg font-bold hover:bg-emerald-400 active:bg-emerald-600 transition-all"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
