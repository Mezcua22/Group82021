from bs4 import BeautifulSoup



with open("index.html", 'r') as hf:
    soup= hf.read()
    """print(soup)"""
    soup2= BeautifulSoup(soup, 'lxml')
    """print(soup2.prettify())
    """
    tags= soup2.find('h1')
    print(tags)