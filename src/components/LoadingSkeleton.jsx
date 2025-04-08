import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const LoadingSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div key={index} className="w-60">
        <Skeleton height={15} />
        <Skeleton height={15} />
        <Skeleton height={15} />
        <Skeleton height={15} />
        <div className="w-1/4 mt-2">
          <Skeleton height={15} />
        </div>
      </div>
    ));
};

export default LoadingSkeleton;
