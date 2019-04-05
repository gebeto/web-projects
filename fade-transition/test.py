import requests



for s in xrange(1300, 1600):
	url = 'https://cdn.27.ua/{}/be/8f/900751_3.jpeg'.format(s)
	res = requests.head(url)
	if res.status_code == 200:
		print url
	if s % 100 == 0:
		print "Step:", s