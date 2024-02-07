import {
  SkeletonButton,
  SkeletonImageBlock,
  SkeletonItem,
  SkeletonList,
} from './AdvertismentsSkeleton.styled';

const AdvertismentsSkeleton = () => {
  return (
    <SkeletonList>
      {Array.from({ length: 12 }, (_, i) => (
        <SkeletonItem key={i}>
          <SkeletonImageBlock />
          <SkeletonButton />
        </SkeletonItem>
      ))}
    </SkeletonList>
  );
};

export default AdvertismentsSkeleton;
