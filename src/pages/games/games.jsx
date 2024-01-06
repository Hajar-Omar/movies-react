import React, { lazy, Suspense, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";
import "./games.css";
import CustomSpinner from "../../components/spinner/Spinner"

const Card = lazy(() => import("./Card"));

function Games() {
  const [searchParams] = useSearchParams();
  const [games, setGames] = useState([]);

  // for virsual scrolling
  const [visibleData, setVisibleData] = useState([]);

  const loadMore = async () => {
    console.log("load more...", visibleData.length);
    if (visibleData.length)
      await setVisibleData(games.slice(0, visibleData.length + 3));
  };

  useEffect(() => {
    loadData();
  }, [searchParams]);

  const loadData = async () => {
    const req = await fetch(
      `https://api.sampleapis.com/${searchParams.get("type")}/games`
    );
    const data = await req.json();
    setGames(data);
    setVisibleData(data.slice(0, 6));
  };

  return (
    <>
      <h2 className="my-5">{searchParams.get("type").toUpperCase()} Games</h2>
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
