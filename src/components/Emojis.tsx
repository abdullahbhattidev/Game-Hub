import { Image, ImageProps } from '@chakra-ui/react'
import bulls_eye from '../assets/bulls-eye.webp'
import meh from '../assets/meh.webp'
import thumbs_up from '../assets/thumbs-up.webp'


interface props{
    rating: number
}
const Emojis = ({rating}:props) => {
  if (rating<3) return null
  const EmojisMap: {[key: number] : ImageProps} = {
    3: {src: meh, alt:"meh" },
    4: {src: thumbs_up, alt:"recommended" },
    5: {src: bulls_eye, alt: "exceptional"}
  }
  return (
    <Image marginTop={2} boxSize='25px' {...EmojisMap[rating]}/>
  )
}

export default Emojis