import BookImage from "src/Assets/Images/skandar.jpg";
import { BiUser } from "react-icons/bi";

function BookCard({ bookTitle,bookAuthor, bookDescription }) {
  return (
    <div className="mt-10 card card-side bg-gray-800 shadow-xl h-70 w-6/12 shadow-md">
      <figure className="h-full">
        <img src={BookImage} alt="Book Image" className="h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookTitle}</h2>
        <div className="mt-24 flex justify-between items-center">
          <div className="flex flex-col gap-3 text-white text-normal">
            <div className="flex justify-start gap-5 items-center">
              <div>
                <BiUser className="text-xl " />
              </div>
              <div>{bookAuthor}</div>
            </div>
            <div>{bookDescription}</div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
