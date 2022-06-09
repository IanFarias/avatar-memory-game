import { GALLERY_IMAGES } from '../../../constants'
import { Header, Container, Title } from '../../components'
import './gallery.screen.css'

type ImageProps = {
  src: string
  artist: string
  url: string
}

const FeedCard = ({ src, artist, url }: ImageProps) => {
  return (
    <div className="feed-card">
      <img src={src} alt={`arte do artista: ${artist}`} />
      <div className="feed-card--content">
        <h2 aria-label={`Artista ${artist}`}>{artist}</h2>
        <a target="_blank" rel="noreferrer" href={url}>
          Link para a foto
        </a>
      </div>
    </div>
  )
}

const GalleryScreen = () => {
  return (
    <>
      <Header menu />
      <Container className="gallery--container">
        <Title className="gallery--title">Galeria</Title>
        <div className="feed">
          {GALLERY_IMAGES.map((image, index) => {
            return <FeedCard key={index} src={image.src} artist={image.artist} url={image.url} />
          })}
        </div>
      </Container>
    </>
  )
}

export { GalleryScreen }
