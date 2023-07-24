

const Review = ({ collegeName, reviewer, content }) => {
  return (
    <div className="review mb-8 flex flex-col text-center">
      <h3 className="text-2xl text-cyan-700 font-bold italic ">{collegeName}</h3>
      <p className="text-xl text-cyan-700 font-bold italic">
        <p><strong>Reviewed by: </strong>{reviewer}</p>
      </p>
      <p className="text-xl text-cyan-700 font-bold italic">{content}</p>
    </div>
  );
};

export default Review;
