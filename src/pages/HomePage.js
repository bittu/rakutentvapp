import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Artwork from '../components/Artwork/Artwork'
import { Carousel, CarouselItem } from '../components/Carousel/Carousel'
import { useData } from '../contexts/DataContext'

import classes from './pagestyles.module.scss'

const HomePage = () => {
  const { data } = useData()

  return (
    <Fragment>
      <Helmet>
        <title>Rakuten TV - Your cinema at home</title>
      </Helmet>
      <div className={classes.wrapper}>
        {data && data.length && (
          data.map(d => (
            d.contents && d.contents.data && d.contents.data.length ? (
              <div key={d.id} className={classes.lists}>
                <h3>
                  {d.name}
                </h3>
                <Carousel>
                  {d.contents.data.map(d1 => (
                    <CarouselItem key={d1.id}>
                      <Artwork
                        src={d1.images.artwork}
                        title={d1.title}
                        link={`/movie/${d1.id}`}
                      />
                    </CarouselItem>
                  ))}
                </Carousel>
              </div>
            ) : null
          ))
        )}
      </div>
    </Fragment>
  )
}

export default HomePage