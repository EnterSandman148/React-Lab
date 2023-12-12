import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'
import Card from '../components/card'
import CardForm from '../components/CardForm'
import MyTable from '../components/MyTable'
import { findCards } from '../utils/supabase-client'

export const revalidate = 0

const cardTableColumns = [
  {
    title: 'Organization',
    key: 'organization',
  },
  {
    title: 'Website',
    key: 'website',
  },
  {
    title: 'Image',
    key: 'image',
  },
  {
    title: 'Description',
    key: 'description',
  },
]

export default async function Conservation() {
  const cards = await findCards()
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Conservation" />
        <PageContent content="These wonderful organizations are participating in Elephant conservation efforts all across the globe." />
        <div className="flex justify-between flex-wrap gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.organization}
              subtitle={card.website}
              image={card.image}
              description={card.description}
            />
          ))}
        </div>
        <div className="mt-6">
          <PageContent content="Are you a part of a conservation organization for Elephants? Enter your information below to add yourself to our list!" />
        </div>
        <CardForm />
        <div className="mt-12">
          <PageContent content="All of our conservation organizations can be found below:" />
        </div>
        <div className="bg-slate-100 rounded-md mt-5 p-4">
          <MyTable columns={cardTableColumns} records={cards} />
        </div>
        <Footer />
      </div>
    </div>
  )
}
