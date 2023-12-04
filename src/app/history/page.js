import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Footer from '../components/Footer'
import LeftRightContent from '../components/LeftRightContent'

export default function History() {
  const topContent =
    'Over 180 extinct members of order Proboscidea have been described. The earliest proboscideans, the African Eritherium and Phosphatherium are known from the late Paleocene. The Eocene included Numidotherium, Moeritherium and Barytherium from Africa. These animals were relatively small and, some, like Moeritherium and Barytherium, were probably amphibious. Later on, genera such as Phiomia and Palaeomastodon arose; the latter likely inhabited more forested areas. Proboscidean diversification changed little during the Oligocene. One notable species of this epoch was Eritreum melakeghebrekristosi of the Horn of Africa, which may have been an ancestor to several later species'
  const middleContent =
    'A major event in proboscidean evolution was the collision of Afro-Arabia with Eurasia, during the Early Miocene, around 18-19 million years ago, allowing proboscideans to disperse from their African homeland across Eurasia and later, around 16-15 million years ago into North America across the Bering Land Bridge. Proboscidean groups prominent during the Miocene include the deinotheres, along with the more advanced elephantimorphs, including mammutids (mastodons), gomphotheres, amebelodontids (which includes the "shovel tuskers" like Platybelodon), choerolophodontids and stegodontids. Around 10 million years ago, the earliest members of the family Elephantidae emerged in Africa, having originated from gomphotheres.'
  const bottomContent =
    'Elephantids are distinguished from earlier proboscideans by a major shift in the molar morphology to parallel lophs rather than the cusps of earlier proboscideans, allowing them to become higher-crowned (hypsodont) and more efficient in consuming grass. The Late Miocene saw major climactic changes, which resulted in the decline and extinction of many proboscidean groups. The earliest members of the modern genera of Elephantidae appeared during the latest Miocene-early Pliocene around 5 million years ago. The elephantid genera Elephas (which includes the living Asian elephant) and Mammuthus (mammoths) migrated out of Africa during the late Pliocene, around 3.6 to 3.2 million years ago.'

  const topPicture = <img className="mx-auto" src="https://i.imgur.com/6tAbcMQ.jpg" />
  const middlePicture = <img className="mx-auto" src="https://i.imgur.com/6tAbcMQ.jpg" />
  const bottomPicture = <img className="mx-auto" src="https://i.imgur.com/6tAbcMQ.jpg" />
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="History" />
        <LeftRightContent
          topContent={topContent}
          topPicture={topPicture}
          middleContent={middleContent}
          middlePicture={middlePicture}
          bottomContent={bottomContent}
          bottomPicture={bottomPicture}
        />
        <Footer />
      </div>
    </div>
  )
}
