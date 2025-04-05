import SingleCommentComponent from "./SingleCommentComponent";

function CommentsComponent() {

  return (
    <div className="mt-40 text-start">
      <h1 className="text-[32px] font-bold mb-10">
        از زبان دانشجویان فرانت کست
      </h1>
      <div className="mx-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
        <SingleCommentComponent/>
        <SingleCommentComponent/>
        <SingleCommentComponent/>
        <SingleCommentComponent/>
      </div>
    </div>
  );
}

export default CommentsComponent;
