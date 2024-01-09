import React, { lazy, Suspense, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import "./games.css";
import CustomSpinner from "../../components/spinner/Spinner";
import apiService from "../../services/apiService";

const Card = lazy(() => import("./Card"));

function Games() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [games, setGames] = useState([]);

  // for virsual scrolling
  const [visibleData, setVisibleData] = useState([]);

  const loadMore = async () => {
    if (visibleData.length)
      await setVisibleData(games.slice(0, visibleData.length + 3));
  };

  useEffect(() => {
    // fix: when open offCanvas here, it does remove the query parms
    if (!searchParams.get("type")) {
      navigate("?type=xbox");
    }
    loadData();
    // eslint-disable-next-line
  }, [searchParams]);

  const loadData = async () => {
    const data = await apiService(
      `${searchParams.get("type") ?? "xbox"}/games`
    );
    setGames(data);
    setVisibleData(data.slice(0, 6));
  };

  return (
    <>
      <h2 className="my-5">
        {searchParams.get("type")?.toUpperCase() ?? "XBOX"} Games
      </h2>
      <div className="row custom-row d-flex mx-0">
        <Suspense fallback={<div>isLoading...</div>}>
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={true || false}
            loader={
              <div className="loader text-center" key={0}>
                <CustomSpinner />
              </div>
            }
          >
            {visibleData.length &&
              visibleData.map((game) => <Card key={game.id} game={game} />)}
          </InfiniteScroll>
        </Suspense>
      </div>
    </>
  );
}

export default Games;
