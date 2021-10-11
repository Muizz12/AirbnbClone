import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'
import Map from '../components/Map'
function Search({ searchResult }) {
    const router = useRouter();
    // console.log(searchResult);
    // es6 destucturelisation
    const { location, startDate, endDate, numberofguest } = router.query;
    console.log(router.query);
    const formatstartdate = format(new Date(router.query.startDate), "dd MMMM yy")
    const formatendtdate = format(new Date(router.query.endDate), "dd MMMM yy")
    const range = `${formatstartdate}- ${formatendtdate}`
    return (
        <div>
            <Head>
                <title>AirBnb</title>
                <link rel="icon" href="/1405612741-airbnb-why-new-logo.jpg" />
            </Head>
            <Header Placeholder={`${location} | ${range} |${numberofguest}`} />
            <main className='flex'>
                <section className='flex-grow pt-14 px-6 '>
                    <p className='text-xs'> stays- {range} - for {router.query.numberofguest} number of guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-4' >Stays in {router.query.location}</h1>
                    <div className='hidden lg:inline-flex mb-5  space-x-4 text-gray-800 whitespace-normal '>
                        <p className='button'> Cancecllation Flexibility</p>
                        <p className='button'> Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More filters</p>
                    </div>
                    <div className='flex flex-col'>
                        {searchResult.map(({ img, location, title, description, star, price, total }) => (
                            <InfoCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total} />
                        ))}
                    </div>

                </section >
                <section className="hidden xl:inline-flex xl:min-w-[600px]">
                    <Map searchResult={searchResult} />
                </section>

            </main >
            <Footer />

        </div >
    )
}

export default Search

export async function getServerSideProps() {
    const searchResult = await (fetch('https://links.papareact.com/isz'))
        .then((res) => res.json());
    return {
        props: {
            searchResult,

        }
    }
}
