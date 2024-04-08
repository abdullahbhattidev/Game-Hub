import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const CardSkeleton = () => {
  return (
    <Card overflow="hidden" borderRadius={10} >
        <Skeleton height="200.562px" />
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default CardSkeleton