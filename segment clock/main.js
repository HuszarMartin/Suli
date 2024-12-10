const segments = {
    '0': [1, 1, 1, 1, 1, 1, 0],
    '1': [0, 1, 1, 0, 0, 0, 0],
    '2': [1, 1, 0, 1, 1, 0, 1],
    '3': [1, 1, 1, 1, 0, 0, 1],
    '4': [0, 1, 1, 0, 0, 1, 1],
    '5': [1, 0, 1, 1, 0, 1, 1],
    '6': [1, 0, 1, 1, 1, 1, 1],
    '7': [1, 1, 1, 0, 0, 0, 0],
    '8': [1, 1, 1, 1, 1, 1, 1],
    '9': [1, 1, 1, 1, 0, 1, 1],
  };

  function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-GB', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).replace(/:/g, '');

    document.querySelectorAll('.digit').forEach((digit, index) => {
      const num = timeString[index];
      const segmentsState = segments[num];
      digit.innerHTML = '';
      segmentsState.forEach((on, i) => {
        const segmentDiv = document.createElement('div');
        segmentDiv.className =` segment segment-${i + 1} ${on ? '' : 'off'}`;
        digit.appendChild(segmentDiv);
      });
    });
  }

  setInterval(updateClock, 1000);
  updateClock();

