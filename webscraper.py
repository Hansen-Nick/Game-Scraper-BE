from bs4 import BeautifulSoup
import requests
import json

url = 'https://www.metacritic.com/browse/games/release-date/new-releases/pc/metascore'
response = requests.get(url)
content = BeautifulSoup(response.content, "html.parser")
games = content.findAll('div', attrs={"class": ["product_title"]})
score = content.findAll('div', attrs={"class": ["metascore_w"]})


gameNameList = []
for i in games:
  gameDict = {
    "title": i.find('a').string.strip()
  }
  gameNameList.append(gameDict)

completedGameList = []
for i in range(len(gameNameList)):
  completedGameDict = {**gameNameList[i], "score": score[i].text, "hi": "hi"}
  completedGameList.append(completedGameDict)


with open('gameData.json', 'w') as outfile:
  json.dump(completedGameList, outfile)
