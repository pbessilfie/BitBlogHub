import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div key={index} className="">
        <div className="w-full h-52 sm:h-80 rounded-lg mb-3">
          <Skeleton height={"100%"} />
        </div>
      </div>
    ));
};

export default CardSkeleton;
