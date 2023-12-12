import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import Footer from './components/Footer'
import Card from './components/card'
import { findHomeCards } from './utils/supabase-client'
import PageContent from './components/PageContent'

export const revalidate = 0

export default async function Home() {
  const cards = await findHomeCards()
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent content="The home of everything Elephant" />
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
