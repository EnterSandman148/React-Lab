import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'
import CardForm from '../components/CardForm'
import MyTable from '../components/MyTable'
import { findCards } from '../utils/supabase-client'

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
  const cards = await findCards()
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Anatomy" />
        <PageContent content="This is about the anatomy of elephants" />
        <CardForm />
        <MyTable columns={cardTableColumns} records={cards} />
        <Footer />
      </div>
    </div>
  )
}