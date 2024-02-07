import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const CardSkeleton = () => {
  return (
    <Card overflow="hidden" borderRadius={10} width="300.850px">
        <Skeleton height="200.562px" />
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default CardSkeleton