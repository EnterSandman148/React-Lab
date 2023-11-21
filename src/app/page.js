import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Footer from './components/Footer'
import Card from './components/card'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://xpomgalaosneveajkczq.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export const revalidate = 0

export default async function Home() {
  const { data: cards, error } = await supabase.from('cards').select('*')

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
