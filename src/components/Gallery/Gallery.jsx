import { useState } from 'react'
import clsx from 'clsx'
import css from './Gallery.module.css'

export default function Gallery({ images, name }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      <img
        className={css.mainImg}
        src={images[activeIndex].original}
        alt={name}
      />
      <ul className={css.thumbs}>
        {images.map((image, index) => (
          <li key={image.thumb}>
            <button
              type="button"
              className={clsx(css.thumb, index === activeIndex && css.active)}
              onClick={() => setActiveIndex(index)}
            >
              <img src={image.thumb} alt={`${name} photo ${index + 1}`} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
