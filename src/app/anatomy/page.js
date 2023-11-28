import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'
import CardForm from '../components/CardForm'

export default function Anatomy() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Anatomy" />
        <PageContent content="This is about the anatomy of elephants" />
        <CardForm />
        <Footer />
      </div>
    </div>
  )
}
