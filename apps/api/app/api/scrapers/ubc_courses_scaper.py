from bs4 import BeautifulSoup
import requests

pageToScrape = requests.get("https://vancouver.calendar.ubc.ca/course-descriptions/subject/cpscv")
soup = BeautifulSoup(pageToScrape.text, "html.parser")
titles = soup.findAll("h3", attrs={"class":"text-lg"})
descriptions = soup.findAll("p", attrs={"class":"mt-0"})


for description, title in zip(titles, descriptions):
    print(title.text + "\n" + description.text)