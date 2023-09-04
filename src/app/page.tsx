import {CarCard} from '@src/components';
import {CustomFilter} from '@src/components';
import {Hero} from '@src/components';
import {SearchBar} from '@src/components'
import { ShowMore } from '@src/components'
import { fuels, yearsOfProduction } from '@src/constants'
import { FilterProps } from '@src/types'
import { FetchCars } from '@src/utils'
export interface HomeProps {
  searchParams: FilterProps;
}

export default async function Home({ searchParams }: HomeProps){
  const allCars = await FetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.Year || 2022,
    fuel: searchParams.Fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' 
      id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl
          font-extrabold'>Car Catalogue </h1>
          <p>Explore the Cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
           <CustomFilter title="Fuel" options={fuels}/>
           <CustomFilter title="Year" options={yearsOfProduction}/>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
          <div className='home__cars-wrapper'>
            {allCars?.map((car) => (
              <CarCard key={car.class} car={car} />
            ))}
          </div>
          <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
        </section>
        ) :
        (<div className='home_error-container'>
          <h2 className="text-black text-xl">Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>)}
      </div>
    </main>
  )
}
