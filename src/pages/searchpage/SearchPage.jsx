import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import "./searchpage.css";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useStateValue } from "../../reducer/StateProvider";
import useGoogle from "../../api/useGoogle";
import Footer from "../footer/Footer";

function SearchPage() {
  const [{ term }] = useStateValue();

  const { data } = useGoogle(term);
  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/" className="homePage">
          <div className="Title">NetExplore 🔍</div>
        </Link>

        <div className="searchPage_input">
          <Search hideButtons />
          <div className="searchPage_options">
            <div className="searchPage_option">
              <Link to="/search" className="searchPage_link searchPage_option">
                <SearchIcon />
                All
              </Link>
            </div>
            <div className="searchPage_option">
              <Link to="/search" className="searchPage_link searchPage_option">
                <DescriptionIcon />
                News
              </Link>
            </div>
            <div className="searchPage_option">
              <Link to="/search" className="searchPage_link searchPage_option">
                <ImageIcon />
                Images
              </Link>
            </div>
            <div className="searchPage_option">
              <Link to="/search" className="searchPage_link searchPage_option">
                <LocalOfferIcon />
                Shopping
              </Link>
            </div>
            <div className="searchPage_option">
              <Link to="/search" className="searchPage_link searchPage_option">
                <RoomIcon />
                Maps
              </Link>
            </div>
            <div className="searchPage_option">
              <Link to="/search" className="searchPage_link searchPage_option">
                <MoreVertIcon />
                More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>

          {data?.items.map((item) => (
            <div className="searchPage_resultBox">
              <a href={item.link} className="searchPage_resultLink">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                      className="searchPage_resultImage"
                    />
                  )}

                {item.displayLink}
              </a>

              <a href={item.link} className="searchPage_resultTitle">
                <h2>{item.title}</h2>
              </a>

              <p className="searchPage_resultDescription">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default SearchPage;
