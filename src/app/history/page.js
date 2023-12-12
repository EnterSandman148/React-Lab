import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Footer from '../components/Footer'
import LeftRightContent from '../components/LeftRightContent'

export default function History() {
  const topContent1 =
    'Over 180 extinct members of order Proboscidea have been described. The earliest proboscideans, the African Eritherium and Phosphatherium are known from the late Paleocene. The Eocene included Numidotherium, Moeritherium and Barytherium from Africa. These animals were relatively small and, some, like Moeritherium and Barytherium were probably amphibious. Later on, genera such as Phiomia and Palaeomastodon arose; the latter likely inhabited more forested areas. Proboscidean diversification changed little during the Oligocene. One notable species of this epoch was Eritreum melakeghebrekristosi of the Horn of Africa, which may have been an ancestor to several later species'
  const topContent2 =
    'A major event in proboscidean evolution was the collision of Afro-Arabia with Eurasia, during the Early Miocene, around 18-19 million years ago, allowing proboscideans to disperse from their African homeland across Eurasia and later, around 16-15 million years ago into North America across the Bering Land Bridge. Proboscidean groups prominent during the Miocene include the deinotheres, along with the more advanced elephantimorphs, including mammutids (mastodons), gomphotheres, amebelodontids (which includes the "shovel tuskers" like Platybelodon), choerolophodontids and stegodontids. Around 10 million years ago, the earliest members of the family Elephantidae emerged in Africa, having originated from gomphotheres.'
  const topContent3 =
    'Elephantids are distinguished from earlier proboscideans by a major shift in the molar morphology to parallel lophs rather than the cusps of earlier proboscideans, allowing them to become higher-crowned (hypsodont) and more efficient in consuming grass. The Late Miocene saw major climactic changes, which resulted in the decline and extinction of many proboscidean groups. The earliest members of the modern genera of Elephantidae appeared during the latest Miocene-early Pliocene around 5 million years ago. The elephantid genera Elephas (which includes the living Asian elephant) and Mammuthus (mammoths) migrated out of Africa during the late Pliocene, around 3.6 to 3.2 million years ago.'
  const middleContent1 =
    'Over the course of the Early Pleistocene, all non-elephantid probobscidean genera outside of the Americas became extinct with the exception of Stegodon, with gomphotheres dispersing into South America as part of the Great American interchange, and mammoths migrating into North America around 1.5 million years ago. At the end of the Early Pleistocene, around 800,000 years ago the elephantid genus Palaeoloxodon dispersed outside of Africa, becoming widely distributed in Eurasia. Proboscideans underwent a dramatic decline during the Late Pleistocene, with all remaining non-elephantid proboscideans (including Stegodon, mastodons, and the gomphotheres Cuvieronius and Notiomastodon) and Palaeoloxodon becoming extinct, with mammoths only surviving in relict populations on islands around the Bering Strait into the Holocene, with their latest survival being on Wrangel Island, where they persisted until around 4,000 years ago.'
  const middleContent2 =
    'Over the course of their evolution, probobscideans grew in size. With that came longer limbs and wider feet with a more digitigrade stance, along with a larger head and shorter neck. The trunk evolved and grew longer to provide reach. The number of premolars, incisors, and canines decreased, and the cheek teeth (molars and premolars) became longer and more specialised. The incisors developed into tusks of different shapes and sizes.[29] Several species of proboscideans became isolated on islands and experienced insular dwarfism, some dramatically reducing in body size, such as the 1 metre (3.3 ft) tall dwarf elephant species Palaeoloxodon falconeri.'
  const middleContent3 = ''
  const bottomContent1 = ''
  const bottomContent2 = ''
  const bottomContent3 =
    'Today there are three living species of elephant: Loxodonta africana (African Bush Elephant), Loxodonta Cyclotis (African Forest Elephant), and Elephas Maximus (Asian Elephant)'
  const topPicture = (
    <figure>
      <img className="mx-auto" src="https://i.imgur.com/achrySE.png" alt="Elephant at sunset" />
      <figcaption className="mt-3 text-center text-md font-bold">Evolution of Afrotheria to Elephantidae</figcaption>
    </figure>
  )
  const middlePicture = (
    <figure>
      <img className="mx-auto" src="https://i.imgur.com/K15jSLy.jpg" alt="Elephant at sunset" />
      <figcaption className="mt-3 text-center text-md font-bold">
        Moeritherium, an early ancestor to Elephants
      </figcaption>
    </figure>
  )

  const bottomPicture = (
    <figure>
      <img className="mx-auto" src="https://i.imgur.com/exZwyUF.png" alt="Elephant at sunset" />
      <figcaption className="mt-3 text-center text-md font-bold">
        Evolution of modern day Elephants from Proboscidea
      </figcaption>
    </figure>
  )

  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="History" />
        <LeftRightContent
          topContent1={topContent1}
          topContent2={topContent2}
          topContent3={topContent3}
          topPicture={topPicture}
          middleContent1={middleContent1}
          middleContent2={middleContent2}
          middleContent3={middleContent3}
          middlePicture={middlePicture}
          bottomContent1={bottomContent1}
          bottomContent2={bottomContent2}
          bottomContent3={bottomContent3}
          bottomPicture={bottomPicture}
        />
        <Footer />
      </div>
    </div>
  )
}
