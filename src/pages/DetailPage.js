import { noop } from 'lodash'
import React, { Fragment, useEffect, useState } from 'react'
import cn from 'classnames'
import { useParams } from 'react-router'
import ActionButton from '../components/ActionButton/ActionButton'
import { Carousel, CarouselItem } from '../components/Carousel/Carousel'
import Cast from '../components/Cast/Cast'
import Icon, { Icons } from '../components/Icon/Icon'
import Loading from '../components/Loading/Loading'
import Parallax from '../components/Parallax/Parallax'
import Score from '../components/Score/Score'
import { getMovieData } from '../service/api'

import classes from './pagestyles.module.scss'

const DetailPage = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    getMovieData(id)
    .then(data => setData(data))
  }, [id])

  return (
    <div className={classes.details}>
      {data ? (
        <Fragment>
          <Parallax src={data.images.snapshot}>
              <div className={classes.buttonContainer}>
                <ActionButton
                  text="Trailer"
                  onClick={noop}
                  icon={Icons.PLAY}
                />
                <ActionButton
                  text="Add to Whishlist"
                  onClick={noop}
                  icon={Icons.WISHLIST}
                />
              </div>
              <div className={classes.data}>
                {data.scores && data.scores.length > 0 && (
                  <div className={classes.ratingContainer}>
                    <img
                      src={data.scores[0].site.image}
                      alt="IMDb"
                      style={{width:'40px', height:'20px', color: 'rgb(245, 197, 24)'}} />
                    <span>{data.scores[0].score}</span>
                  </div>
                )}
                <h1 className={classes.title}>
                  {data.title}
                </h1>
              </div>
          </Parallax>
          <div className={classes.detailInfo}>
            <div className={classes.detailInfoMain}>
              <div className={classes.movieInfo}>
                <div className={classes.infoContent}>
                  <Icon use={Icons.PARENTAL} className={classes.infoIcon} />
                  {data.classification.age}
                </div>
                <div className={classes.infoContent}>{data.duration} minutes</div>
                <div className={classes.infoContent}>
                  <Icon use={Icons.CALENDAR} className={classes.infoIcon} />
                  {data.year}
                </div>
                {data.countries && data.countries.length > 0 && (
                  <div className={classes.infoContent}>
                    <Icon use={Icons.COUNTRY} className={classes.infoIcon} />
                    {data.countries[0].name}
                  </div>
                )}
                <div className={classes.infoContent}>
                  <Icon use={Icons.INFO} className={classes.infoIcon} />
                  Original title: {data.original_title}
                </div>
              </div>
              <div className={classes.movieInfo}>
                {data.plot}
              </div>
              <div className={cn(classes.movieInfo, classes.column)}>
                <div className={classes.infoContent}>
                  <Icon use={Icons.CLAPPER} className={classes.infoIcon} />
                  Direction and casting
                </div>
                <Carousel lightTheme>
                  {data.directors && data.directors.length > 0 && (
                    data.directors.map(dir => (
                      <CarouselItem key={dir.id} className={classes.cast}>
                        <Cast
                          src={dir.photo}
                          name={dir.name}
                          isDirector
                        />
                      </CarouselItem>
                    ))
                  )}
                  {data.actors && data.actors.length > 0 && (
                    data.actors.map(ac => (
                      <CarouselItem key={ac.id} className={classes.cast}>
                        <Cast
                          src={ac.photo}
                          name={ac.name}
                        />
                      </CarouselItem>
                    ))
                  )}
                </Carousel>
              </div>
              <div className={classes.movieInfo}>
                {data.scores && data.scores.length > 0 && (
                  <div className={cn(classes.movieInfo, classes.column, classes.inline)}>
                    <div className={classes.infoContent}>
                      <Icon use={Icons.STAR} className={classes.infoIcon} />
                      Score
                    </div>
                    <div style={{display: 'flex'}}>
                      {data.scores.map(score => (
                        <Score
                          percentage={score.score / score.site.scale * 100}
                          label={score.score}
                          title={score.site.name}
                          link={score.href}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {data.genres && data.genres.length > 0 && (
                  <div className={cn(classes.movieInfo, classes.column , classes.inline)}>
                    <div className={classes.infoContent}>
                      <Icon use={Icons.GENRES} className={classes.infoIcon} />
                      Genres
                    </div>
                    <div style={{display: 'flex'}}>
                      {data.genres.map(genre => (
                        <Cast
                          src={genre.additional_images.icon}
                          name={genre.name}
                          className={classes.genre}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default DetailPage