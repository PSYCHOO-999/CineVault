import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import noimage from "/noimage.jpeg";

const HorizontalCards = ({ data, title }) => {
    return (
        <div className="w-[100%] flex  overflow-y-hidden mb-5 p-5 ">
            {data.length > 0 ? (
                data.map((d, i) => (
                    <Link
                        to={`/${d.media_type || title}/details/${d.id}`}
                        key={i}
                        className="min-w-[15%] h-[35vh]  bg-zinc-900 mr-5 mb-5"
                    >
                        <img
                            className="w-full h-[55%] object-cover"
                            src={
                                d.backdrop_path || d.poster_path
                                    ? `https://image.tmdb.org/t/p/original${
                                          d.backdrop_path || d.poster_path
                                      }`
                                    : noimage
                            }
                            alt=""
                        />
                        <div className="text-white p-3 h-[45%] overflow-y-auto">
                            <h1 className=" text-xl font-semibold ">
                                {d.name ||
                                    d.title ||
                                    d.original_name ||
                                    d.original_title}
                            </h1>
                            <p className="">
                                {d.overview.slice(0, 50)}...
                                <span className="text-zinc-500"> more</span>
                            </p>
                        </div>
                    </Link>
                ))
            ) : (
                <h1 className="text-3xl mt-5 text-white font-black text-center">
                    Nothing to show
                </h1>
            )}
        </div>
    );
};

HorizontalCards.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            media_type: PropTypes.string,
            backdrop_path: PropTypes.string,
            poster_path: PropTypes.string,
            name: PropTypes.string,
            title: PropTypes.string,
            original_name: PropTypes.string,
            original_title: PropTypes.string,
            overview: PropTypes.string.isRequired
        })
    ).isRequired,
    title: PropTypes.string.isRequired
};

export default HorizontalCards;
