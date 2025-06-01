export function formatLoudness(parsed) {
  const { momentaryLoudness = [], shortTermLoudness = [] } = parsed;

  // linear‐interpolate src[] to length targetLen
  function interpolateArray(src, targetLen) {
    const srcLen = src.length;
    if (srcLen === 0) return Array.from({ length: targetLen }, () => 0);
    if (targetLen === srcLen) return src.slice();
    const out = [];
    for (let i = 0; i < targetLen; i++) {
      const t = (i * (srcLen - 1)) / (targetLen - 1);
      const lo = Math.floor(t);
      const hi = Math.ceil(t);
      if (lo === hi) {
        out.push(src[lo]);
      } else {
        const w = t - lo;
        out.push(src[lo] * (1 - w) + src[hi] * w);
      }
    }
    return out;
  }

  const adjustedShort = interpolateArray(
    shortTermLoudness,
    momentaryLoudness.length
  );

  const data = [
    {
      dataPoints: momentaryLoudness,
      color: "#320bff",
      label: "Momentary",
    },
    {
      dataPoints: adjustedShort,
      color: "#e84d4f",
      label: "Short Term",
    },
  ];

  const xLabels = Array.from(
    { length: momentaryLoudness.length },
    (_, i) => i + 1
  );

  return { data, xLabels };
}
