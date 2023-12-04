import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import Footer from './components/Footer'
import Card from './components/card'
import { findCards } from './utils/supabase-client'
import PageContent from './components/PageContent'

export const revalidate = 0

export default async function Home() {
  const cards = await findCards()
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent content="The home of everything Elephant. Click on an Elephant below to learn more about it, or learn more about this incredible species using the navigation buttons above." />
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
