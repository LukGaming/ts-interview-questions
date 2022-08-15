function hIndex(citations: number[]): number {
  let currentCitationCount: number = 0;
  let currentCitation = citations[0];
  let listOfCitations: number[] = [];
  console.log(citations[1]);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i + 1] > currentCitation) {
      console.log(citations[i + 1], "é maior que: ", currentCitation);
      currentCitationCount++;
    } else {
      currentCitation = citations[i + 1];
      listOfCitations.push(currentCitationCount);
      currentCitationCount = 0;
    }
  }

  return listOfCitations.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity);
}
console.log(hIndex([3, 0, 6, 1, 5]));
