import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'

export default function Conservation() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Conservation" />
        <PageContent content="This is about the conservation of elephants" />
        <Footer />
      </div>
    </div>
  )
}