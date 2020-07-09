from bs4 import BeautifulSoup
import requests
import json

url = 'https://www.metacritic.com/browse/games/release-date/new-releases/pc/metascore'
response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'} )
content = BeautifulSoup(response.content, "html.parser")
games = content.find_all('a', 'title')
score = content.findAll('div', attrs={"class": ["clamp-score-wrap"]})


gameNameList = []
for i in games:
  gameDict = {
    "title": i.h3.text
  }
  gameNameList.append(gameDict)




completedGameList = []
for i in range(len(gameNameList)):
  completedGameDict = {**gameNameList[i], "score": score[i].a.div.text}
  completedGameList.append(completedGameDict)


with open('gameData.json', 'w') as outfile:
  json.dump(completedGameList, outfile)
