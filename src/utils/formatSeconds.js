export function formatSeconds(seconds) {
  if (seconds > 60) {
    const minutes = Math.floor(seconds/60);
    const remainder = seconds - minutes * 60;
    const mEnding = minutes > 1 ? 's' : '';
    const sEnding = remainder > 1 ? 's' : '';
    return `${minutes} minute${mEnding}, ${remainder} second${sEnding}`;
  } else {
    return `${seconds} seconds`;
  }
}
