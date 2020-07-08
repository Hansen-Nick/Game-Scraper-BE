from bs4 import BeautifulSoup
import requests
import json

url = 'https://www.metacritic.com/browse/games/release-date/new-releases/pc/metascore'
response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'} )
content = BeautifulSoup(response.content, "html.parser")
games = content.find_all('a', 'title')
score = content.findAll('div', attrs={"class": ["metascore_w"]})

for i in games:
  print(i)

#gameNameList = []
#for i in games:
 # gameDict = {
  #  "title": i.find('a').string.strip()
  #}
  #gameNameList.append(gameDict)

#completedGameList = []
#for i in range(len(gameNameList)):
 # completedGameDict = {**gameNameList[i], "score": score[i].text, "hi": "hi"}
  #completedGameList.append(completedGameDict)
  #print(gameNameList)


#with open('gameData.json', 'w') as outfile:
 # json.dump(completedGameList, outfile)
