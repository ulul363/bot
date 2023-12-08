import spinnies from 'spinnies';

const spinner = {
  "interval": 120,
  "frames": [
    "B",
    "Bo",
    "Bot ",
    "Bot by",
    "Bot by Ak",
    "Bot by akazamd",
    "Bot by akaza",
    "Bot by ",
    "Bot by",
    "Bot ",
    "Bo"
  ]
};

let globalSpinner;

const getGlobalSpinner = (disableSpins = false) => {
  if (!globalSpinner) {
    globalSpinner = new spinnies({ color: 'blue', succeedColor: 'magenta', spinner, disableSpins });
  }
  return globalSpinner;
};

const start = (id, text) => {
  const spins = getGlobalSpinner(false);
  spins.add(id, { text: text });
};

export { start };