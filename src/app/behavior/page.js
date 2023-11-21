import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'

export default function Behavior() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Behavior" />
        <PageContent content="This is about the behavior of elephants" />
        <Footer />
      </div>
    </div>
  )
}
