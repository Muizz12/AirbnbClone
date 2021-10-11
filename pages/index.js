import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MiddleCard from '../components/MiddleCard';
import SmallCard from '../components/SmallCard';

export default function Home({ expolorData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>AirBnb</title>
        <link rel="icon" href="/1405612741-airbnb-why-new-logo.jpg" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 ">Expore Nearby</h2>
          {/* pull some data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {expolorData?.map(item => (
              <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location} />

            ))}
          </div>

        </section>
        <section>
          <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {cardData?.map(item => (
              <MiddleCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <section>
          <div>

            <LargeCard
              img='https://links.papareact.com/4cj'
              title='The Greatest Outdoors'
              description='Wishlis created by Airbnb'
              buttonText='Get Inspired'
            />
          </div>

        </section>

      </main>
      <Footer />



    </div>
  )
}
export async function getStaticProps() {
  const expolorData = await fetch('https://links.papareact.com/pyp')
    .then((res) => res.json()
    );
  const cardData = await fetch('https://links.papareact.com/zp1')
    .then((res) => res.json()
    );

  return {
    props: {
      expolorData,
      cardData
    }
  }

}
