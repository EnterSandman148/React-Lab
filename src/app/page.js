import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/card'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent />
        <div className="flex flex-wrap gap-6">
          <Card title="My First Card" subtitle="My First Subtitle" description="My First Description" />
          <Card title="My Second Card" subtitle="My Second Subtitle" description="My Second Description" />
          <Card title="My Third Card" subtitle="My Third Subtitle" description="My Third Description" />
        </div>
        <PageContent />
      </div>
    </div>
  )
}
