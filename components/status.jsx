"use client";
import React, { useEffect, useState } from "react";

const StreamStatus = () => {
  const [live, setLive] = useState(false);

  useEffect(() => {
        async function fetchStatus() {
        try {
            const res = await fetch("/api/twitch");
            const data = await res.json();
            setLive(data.live);
        } catch (err) {
            console.error(err);
        }
        }

        fetchStatus();

        const interval = setInterval(fetchStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span>{live ? "Live" : "Offline"}</span>
    );
};

export default StreamStatus;