const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const startDebugInfo = document.getElementById('debug-info-start').value;
  const endDebugInfo = document.getElementById('debug-info-end').value;
  
  const startLines = startDebugInfo.split('\n');
  const startCmtLine = startLines[5];
  const startCmt = startCmtLine.substring(10);

  const endLines = endDebugInfo.split('\n');
  const endCmtLine = endLines[5];
  const endCmt = endCmtLine.substring(10);

  const startTime = parseFloat(startCmt);
  const endTime = parseFloat(endCmt);
  const totalTime = endTime - startTime;

  result.innerHTML = `Total time: ${totalTime} seconds`;
});
