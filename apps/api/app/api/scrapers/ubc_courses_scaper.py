from bs4 import BeautifulSoup
import requests
import time


base_url = "https://vancouver.calendar.ubc.ca"
index_url = f"{base_url}/course-descriptions/courses-subject"
subjectIndexPage = requests.get(index_url)
soup = BeautifulSoup(subjectIndexPage.text, "html.parser")

subjects = soup.find_all("a", href=True)

for subject in subjects:
    link = subject['href']
    
    if "/course-descriptions/subject/" in link:
        if link.startswith("/"):
            link = base_url + link
        
        print(f"--- Scraping Subject: {subject.text.strip()} ---")
        
        pageToScrape = requests.get(link)
        sub_soup = BeautifulSoup(pageToScrape.text, "html.parser")
        
        titles = sub_soup.find_all("h3", attrs={"class":"text-lg"})
        descriptions = sub_soup.find_all("p", attrs={"class":"mt-0"})

        for title, description in zip(titles, descriptions):
            print(f"Course: {title.text.strip()}")
            print(f"Description: {description.text.strip()}\n")
        