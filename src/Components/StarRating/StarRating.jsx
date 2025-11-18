export default function StarRating({ rating }) {
  return (
    <div className="flex gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-yellow-500 text-xl ${
            star <= rating ? "opacity-100" : "opacity-30"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}
