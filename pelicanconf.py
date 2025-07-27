AUTHOR = 'Pythonistas GDL admins'
SITENAME = 'Pythonistas GDL'
SITEURL = ""

PATH = "content"

TIMEZONE = 'America/Mexico_City'

DEFAULT_LANG = 'es'
LOCALE = ('es_ES.UTF-8', 'es_MX.UTF-8', 'es_ES', 'es')
DEFAULT_DATE_FORMAT = '%d de %B de %Y'

THEME = "bootstrap2-dark"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
ARTICLE_ORDER_BY = 'reversed-date'
PAGE_ORDER_BY = 'order'

# Blogroll
#LINKS = (
#    ("Pelican", "https://getpelican.com/"),
#    ("Python.org", "https://www.python.org/"),
#    ("Jinja2", "https://palletsprojects.com/p/jinja/"),
#    ("You can modify those links in your config file", "#"),
#)

# Social widget
SOCIAL = (
    ("GitHub", "https://github.com/Pythonistas-GDL"),
    ("Twitter", "https://twitter.com/pythonistas_gdl"),
    ("Facebook", "https://www.facebook.com/pythonistasgdl"),
    ("Instagram", "https://www.instagram.com/pythonistas_gdl"),
    ("LinkedIn", "https://www.linkedin.com/groups/13193010/"),
    ("YouTube", "https://www.youtube.com/@PythonistasGDL"),
    ("TikTok", "https://www.tiktok.com/@pythonistas_gdl"),
    ("Discord", "https://discord.gg/HcvW3r2Wfu"),
)

DEFAULT_PAGINATION = 10

STATIC_PATHS = ['pdfs', 'images', 'extra']
#EXTRA_PATH_METADATA = {
#    'extra/favicon.ico': {'path': 'favicon.ico'},
#    'extra/robots.txt': {'path': 'robots.txt'},
#}
# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True
