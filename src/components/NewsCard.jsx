import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaEye,
  FaShareAlt,
} from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } = news;

  // Format date
  const formattedDate = new Date(news.author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  // Generate star rating icons dynamically
  const getStars = (ratingValue) => {
    const stars = [];
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-orange-500" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-orange-500" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-orange-300" />);
    }

    return stars;
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl bg-base-200 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div>
          <button className="btn btn-ghost btn-sm text-gray-500">
            <IoBookmarkOutline size={16} />
          </button>
          <button className="btn btn-ghost btn-sm text-gray-500">
            <FaShareAlt size={16} />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="text-lg font-bold text-gray-800 hover:text-primary cursor-pointer">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4">
        <p className="text-sm text-gray-600">
          {details.slice(0, 200)}...
          <span className="text-primary font-semibold cursor-pointer">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 text-sm text-gray-600">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">{getStars(rating.number)}</div>
          <span className="font-semibold text-gray-700">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
