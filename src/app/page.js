import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import Footer from './components/Footer'
import Card from './components/card'
import { findCards } from './utils/supabase-client'

export const revalidate = 0

export default async function Home() {
  const cards = await findCards()
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <div className="flex justify-between flex-wrap gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              description={card.description}
            />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}
