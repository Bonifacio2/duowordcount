let stillStrong = document.evaluate('//*[@id="root"]/div/div[2]/div/div[2]/div/div/div[1]/span[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().className;

let prettyGood = document.evaluate('//*[@id="root"]/div/div[2]/div/div[2]/div/div/div[2]/span[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().className;

let timeToPractice = document.evaluate('//*[@id="root"]/div/div[2]/div/div[2]/div/div/div[3]/span[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().className;

let overDue = document.evaluate('//*[@id="root"]/div/div[2]/div/div[2]/div/div/div[4]/span[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().className;

