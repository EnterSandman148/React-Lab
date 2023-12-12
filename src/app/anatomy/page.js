import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'
import Card from '../components/card'
import { findAnatomy } from '../utils/supabase-client'

export const revalidate = 0

const cardTableColumns = [
  {
    title: 'Title',
    key: 'title',
  },
  {
    title: 'Subtitle',
    key: 'subtitle',
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

export default async function Anatomy() {
  const cards = await findAnatomy()
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Anatomy" />
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
