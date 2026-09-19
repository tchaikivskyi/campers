import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampers } from '../../redux/campers/operations'
import {
  selectCampers,
  selectError,
  selectIsLoading,
  selectPage,
  selectTotal,
} from '../../redux/campers/selectors'
import { selectFilters } from '../../redux/filters/selectors'
import Filters from '../../components/Filters/Filters'
import CamperList from '../../components/CamperList/CamperList'
import Button from '../../components/Button/Button'
import Loader from '../../components/Loader/Loader'
import NoResults from '../../components/NoResults/NoResults'
import css from './CatalogPage.module.css'

export default function CatalogPage() {
  const dispatch = useDispatch()
  const campers = useSelector(selectCampers)
  const total = useSelector(selectTotal)
  const page = useSelector(selectPage)
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  const filters = useSelector(selectFilters)

  useEffect(() => {
    dispatch(fetchCampers(1))
  }, [dispatch, filters])

  const handleLoadMore = () => {
    dispatch(fetchCampers(page + 1))
  }

  const isEmpty = !isLoading && !error && campers.length === 0

  return (
    <div className={css.page}>
      <aside className={css.sidebar}>
        <Filters key={JSON.stringify(filters)} />
      </aside>
      <section className={css.content}>
        {campers.length > 0 && <CamperList campers={campers} />}
        {isLoading && <Loader />}
        {error && (
          <p className={css.message}>Something went wrong. Try again later.</p>
        )}
        {isEmpty && <NoResults />}
        {!isLoading && campers.length < total && (
          <Button
            variant="outline"
            className={css.loadMore}
            onClick={handleLoadMore}
          >
            Load more
          </Button>
        )}
      </section>
    </div>
  )
}
