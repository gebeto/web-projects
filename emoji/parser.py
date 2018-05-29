import json
import requests
from bs4 import BeautifulSoup

base_url = "http://emojipedia.org"
ids = 0


def get_categoruies():
	soup = BeautifulSoup(requests.get(base_url).content, "html.parser")
	categories = [{
		"url": base_url + a["href"],
		"title": a.text.strip()
	} for a in soup.find("div", {"class": "block"}).find_all('a')]
	return categories


def get_id():
	global ids
	ids += 1
	return ids


def get_emoji_by_category(category):
	soup = BeautifulSoup(requests.get(category["url"]).content, "html.parser")
	# print category
	emoji = [{
		"id": get_id(),
		"category": category["title"],
		"emoja": a.span.extract().text.strip(),
		"title": a.text.strip(),
	} for a in soup.find("ul", {"class": "emoji-list"}).find_all('a')]
	return emoji


categories = get_categoruies()
res = []
for category in categories:
	res += get_emoji_by_category(category)
# json.dump(res, open('src/emoji.json', 'wb'), indent=4)
json.dump(res, open('src/emoji.json', 'wb'), indent=4)

