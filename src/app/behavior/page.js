import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'
import Card from '../components/card'
import { findBehavior } from '../utils/supabase-client'

export const revalidate = 0

export default async function Behavior() {
  const cards = await findBehavior()
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Behavior" />
        <PageContent content="Learn about the fascinating and unqiue behaviors of elephants." />
        <div className="flex flex-wrap justify-start gap-9">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} subtitle={card.description} image={card.image} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}
