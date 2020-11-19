import React, { useState, useEffect } from "react";
import "./styles.css";
import Card from "./Card";

export default function App() {
  const [cardData, setCardData] = useState();
  const data = [
    {
      src:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",
      title: `Here's the Title of an Awesome Course`,
      time: 30
    },
    {
      src:
        "https://images.unsplash.com/photo-1473283147055-e39c51463929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",
      title: `Here's the Title of an Awesome Course`,
      time: 40
    },
    {
      src:
        "https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",
      title: `Here's the Title of an Awesome Course`,
      time: 20
    },
    {
      src:
        "https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",
      title: `Here's the Title of an Awesome Course`,
      time: 10
    },
    {
      src:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",
      title: `Here's the Title of an Awesome Course`,
      time: 50
    },
    {
      src:
        "https://images.unsplash.com/photo-1473283147055-e39c51463929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",
      title: `Here's the Title of an Awesome Course`,
      time: "40 min"
    },
    {
      src:
        "https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",
      title: `Here's the Title of an Awesome Course`,
      time: 33
    },
    {
      src:
        "https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80",
      title: `Here's the Title of an Awesome Course`,
      time: 44
    }
  ];

  useEffect(() => {
    prepData().then((m) => setCardData(m));
    // setCardData(resultToSet)
  }, []);

  const prepData = async () => {
    const fetchingAPI = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data));
    });

    let dataToSet;
    try {
      dataToSet = await fetchingAPI;
    } catch (e) {
      return (dataToSet = "There is some problem...!");
    }

    return dataToSet;
  };

  return (
    <div className="App">
      {cardData ? <Card cardData={cardData} /> : <div className="loader"></div>}
    </div>
  );
}
