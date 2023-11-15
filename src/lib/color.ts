interface RangeColor {
  min: number;
  max: number;
  startColor: number[];
  endColor: number[];
}

export function generateColor(number: number, maxNumber: number): string {
  const rangeColors: RangeColor[] = [
    {
      min: 2,
      max: 4,
      startColor: [65, 105, 225],
      endColor: [0, 191, 255],
    }, // Blue range
    {
      min: 4,
      max: 8,
      startColor: [0, 191, 255],
      endColor: [0, 255, 0],
    }, // Green range
    {
      min: 8,
      max: 16,
      startColor: [0, 255, 0],
      endColor: [255, 255, 0],
    }, // Yellow range
    {
      min: maxNumber / 2,
      max: maxNumber,
      startColor: [255, 255, 0],
      endColor: [255, 69, 0],
    }, // Red range
  ];

  const matchedColor = rangeColors.find(
    (range) => number >= range.min && number <= range.max
  );

  if (matchedColor) {
    const { startColor, endColor } = matchedColor;
    const interpolationFactor =
      (number - matchedColor.min) / (matchedColor.max - matchedColor.min);

    // Interpolate between startColor and endColor based on the interpolation factor
    const interpolatedColor = startColor.map((channel, index) => {
      const targetChannelValue = endColor[index];
      const delta = targetChannelValue - channel;
      return Math.round(channel + delta * interpolationFactor);
    });

    // Convert RGB values to hex format
    const hexColor = `#${interpolatedColor
      .map((channel) => {
        const hex = channel.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")}`;

    return hexColor;
  }

  return "#FFFFFF"; // Default to white if no matching range found
}
