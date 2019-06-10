# Connnecte avec la base de donnee Firebase
# Ceci est un script pour verifier la database et met l'information a jour dans un fichier csv pour le dashboard
# Date : 9 Juin 2019
# Author : Team Lama

import urllib.request, json
import pandas as pd
import time

categories = ["Deneigement", "Nid-de-poule"]

def get_geoposition(i):
   googlemap_api_url = 'https://maps.googleapis.com/maps/api/geocode/json?address={},Montreal,Quebec&key=AIzaSyA56q2nC7zJTACvglJWgowHH_tePNyVWtw'
   location_url = i['location']['street-address']
   if i['location']['zip-code'] != '' : location_url += ',' + i['location']['zip-code']
   location_url = googlemap_api_url.format(location_url.replace(' ','+'))
   with urllib.request.urlopen(location_url) as url:
       location_data = json.loads(url.read().decode())
       lat = location_data["results"][0]["geometry"]["location"]["lat"]
       lon = location_data["results"][0]["geometry"]["location"]["lng"]
   return lat,lon


last_data = dict()
dfs = dict()
for i in categories :
   last_data[i] = None
   dfs[i] = None


while True:
   for category in categories :
       try:
           with urllib.request.urlopen("https://llamabot-kxoexf.firebaseio.com/{}.json?auth=i6rB4rgycCvTRpdCMC235pLH49vFE9na8iwQdfnm".format(category.lower())) as url:
               data = json.loads(url.read().decode())

           if data == last_data[category] or data == None:
               print("[{}] No updates...".format(category))
           else:
               print("[{}] Updating Dataframe...".format(category))
               dfs[category]  = pd.DataFrame()
               for i in data:
                   lat, lon = get_geoposition(i)

                   ds = pd.DataFrame.from_dict(i, orient='index').T
                   ds = ds.drop('location', axis=1)
                   ds["lat"] = lat
                   ds["lon"] = lon
                   ds["category"] = category
                   if not ds.empty: dfs[category] = pd.concat([ds,dfs[category]])
               last_data[category] = data
       except:
           print("[{}] Issue while collecting data...".format(category))

   try:
       df = pd.concat([i for i in dfs.values()], sort=False)
       if not df.empty:
           df.to_csv("ChatBotFeed.csv", index=False)
   except:
       print("(!) Error while merging")

   time.sleep(2)