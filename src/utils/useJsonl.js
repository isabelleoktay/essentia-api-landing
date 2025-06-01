import { useState, useEffect } from "react";

export function useJsonl(url) {
  const [map, setMap] = useState({});
  useEffect(() => {
    fetch(url)
      .then((r) => r.text())
      .then((text) => {
        const obj = text
          .trim()
          .split("\n")
          .map((line) => {
            try {
              return JSON.parse(line);
            } catch {
              return null;
            }
          })
          .filter(Boolean)
          .reduce((acc, item) => {
            const { model_name, ...rest } = item;
            if (model_name.startsWith("mood_")) {
              // pull out the part after "mood_"
              const moodKey = model_name.split("_")[1];
              acc.mood = acc.mood || {};
              acc.mood[moodKey] = rest;
            } else {
              acc[model_name] = rest;
            }
            return acc;
          }, {});
        setMap(obj);
      })
      .catch(console.error);
  }, [url]);

  return map;
}
