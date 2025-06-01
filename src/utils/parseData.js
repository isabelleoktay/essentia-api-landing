export function parseData(raw) {
  if (!raw) return [];

  // 1) mood‐map: raw[mood].results.activations[mood]
  const keys = Object.keys(raw);
  if (raw[keys[0]]?.results?.activations?.[keys[0]] != null) {
    return keys.map((key) => {
      const v = raw[key].results.activations[key] || 0;
      return { label: key, value: Number(v.toFixed(2)) };
    });
  }

  // 2) key+scale case
  if (raw.results?.key && raw.results?.scale) {
    return {
      key: raw.results.key[0],
      scale: raw.results.scale[0],
    };
  }

  // 3) loudness_ebur128 case
  if (raw.results?.integratedLoudness) {
    const {
      integratedLoudness = [0],
      loudnessRange = [0],
      momentaryLoudness = [],
      shortTermLoudness = [],
    } = raw.results;
    return {
      integratedLoudness: Number(integratedLoudness[0].toFixed(2)),
      loudnessRange: Number(loudnessRange[0].toFixed(2)),
      momentaryLoudness: momentaryLoudness[0],
      shortTermLoudness: shortTermLoudness[0],
    };
  }

  // 4) bpm degara case
  if (raw.results?.bpm) {
    const bpm = raw.results.bpm || 0;
    const beat_positions = raw.results.beat_positions || [];

    return { bpm: Math.round(bpm), beat_positions };
  }

  // 5) single‐model with activations
  const activations = raw.results?.activations || {};

  // 5a) voice_instrumental case
  if ("voice" in activations && "instrumental" in activations) {
    const voice = activations.voice || 0;
    const instrumental = activations.instrumental || 0;
    return [
      { label: "Vocal", value: Number(voice * 100).toFixed(2) },
      { label: "Instrumental", value: Number(instrumental * 100).toFixed(2) },
    ];
  }

  // 5b) danceability case
  if ("danceable" in activations) {
    const v = activations.danceable || 0;
    return { value: v * 100 };
  }

  // 5c) instrument (or any other multikey) case: normalize 0–100
  const entries = Object.entries(activations);
  const max = entries.reduce((m, [, v]) => Math.max(m, v), 0) || 1;
  return entries.map(([key, v]) => ({
    label: key,
    value: Math.round((v / max) * 100),
  }));
}

export function parseGenreActivations(data = {}) {
  const activations = data.results?.activations;
  if (!activations) return {};

  const genreData = {};
  for (const key in activations) {
    const [genre, subgenre] = key.split("---");
    if (!genre || !subgenre) continue;
    genreData[genre] = genreData[genre] || [];
    genreData[genre].push({ subgenre, activation: activations[key] });
  }

  for (const genre in genreData) {
    // Sort by activation descending
    genreData[genre].sort((a, b) => b.activation - a.activation);

    // Find min and max activation in this genre
    const activationsArr = genreData[genre].map((item) => item.activation);
    const max = Math.max(...activationsArr);
    const min = Math.min(...activationsArr);

    // Normalize activations to 0-1 range
    genreData[genre] = genreData[genre].map(({ subgenre, activation }) => {
      const normalized = max === min ? 0 : (activation - min) / (max - min);
      return { subgenre, activation: normalized };
    });
  }

  return genreData;
}
