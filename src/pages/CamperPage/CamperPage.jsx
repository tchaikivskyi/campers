import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCamperById } from '../../redux/campers/operations'
import {
  selectCurrentCamper,
  selectError,
  selectIsLoading,
} from '../../redux/campers/selectors'
import Gallery from '../../components/Gallery/Gallery'
import CamperInfo from '../../components/CamperInfo/CamperInfo'
import VehicleDetails from '../../components/VehicleDetails/VehicleDetails'
import Reviews from '../../components/Reviews/Reviews'
import BookingForm from '../../components/BookingForm/BookingForm'
import Loader from '../../components/Loader/Loader'
import css from './CamperPage.module.css'

export default function CamperPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const camper = useSelector(selectCurrentCamper)
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchCamperById(id))
  }, [dispatch, id])

  return (
    <div className={css.page}>
      {isLoading && <Loader />}
      {error && <p className={css.message}>Camper not found.</p>}
      {camper && (
        <>
          <section className={css.grid}>
            <Gallery images={camper.gallery} name={camper.name} />
            <div className={css.info}>
              <CamperInfo camper={camper} />
              <VehicleDetails camper={camper} />
            </div>
          </section>
          <section className={css.reviews}>
            <h2 className={css.title}>Reviews</h2>
            <div className={css.grid}>
              <Reviews reviews={camper.reviews} />
              <BookingForm camperName={camper.name} />
            </div>
          </section>
        </>
      )}
    </div>
  )
}
