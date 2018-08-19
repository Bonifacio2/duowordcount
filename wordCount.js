let stillStrong = document.evaluate('//*[@id="root"]/div/div[2]/div/div[2]/div/div/div[1]/span[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().className;

let prettyGood = document.evaluate('//*[@id="root"]/div/div[2]/div/div[2]/div/div/div[2]/span[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().className;

let timeToPractice = document.evaluate('//*[@id="root"]/div/div[2]/div/div[2]/div/div/div[3]/span[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().className;

let overdue = document.evaluate('//*[@id="root"]/div/div[2]/div/div[2]/div/div/div[4]/span[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().className;

let wordTable = document.evaluate('//*[@id="root"]/div/div[2]/div/div[1]/table/tbody', document, null, XPathResult.ANY_TYPE, null).iterateNext();

let wordCount = wordTable.getElementsByTagName('tr').length;

let wordLevels = {
  'strong': 0,
  'good': 0,
  'topractice': 0,
  'overdue': 0
};

for(let i=0; i < wordCount; i++){
  let wordClass = wordTable.rows[i].cells[3].getElementsByTagName('span')[0].className;
  if (wordClass == stillStrong) {
    wordLevels['strong'] += 1;
  } else if (wordClass == prettyGood) {
    wordLevels['good'] += 1;
  } else if (wordClass == timeToPractice) {
    wordLevels['topractice'] += 1;
  } else {
    wordLevels['overdue'] += 1;
  }
}

