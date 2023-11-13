import { BeakerIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/solid'

const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Products',
    href: '/products',
  },
]

export default function Navbar() {
  return (
    <div className="flex justify-between items-center gap-6 m-12">
      <GlobeEuropeAfricaIcon className="h-12 w-12 text-emerald-600" />
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
