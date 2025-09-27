AUTHOR = 'Pythonistas GDL admins'
SITENAME = 'Pythonistas GDL'
SITEURL = "https://pythonistas-gdl.org"

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

DEFAULT_PAGINATION = 6

# Social Media Configuration
FB_APP_ID = '1422153322371056'

# SEO Configuration
SITE_DESCRIPTION = 'Comunidad de entusiastas de Python en Guadalajara, México. Únete a nuestras reuniones mensuales, charlas técnicas y networking con otros pythonistas.'
SITE_KEYWORDS = 'Python, Guadalajara, programación, desarrollo, comunidad, reuniones, charlas técnicas, networking, México, Jalisco'

# Sitemap configuration
SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.7, 
        'indexes': 0.5,
        'pages': 0.6
    },
    'changefreqs': {
        'articles': 'weekly',
        'indexes': 'daily',
        'pages': 'monthly'
    }
}

# Plugins for SEO
PLUGIN_PATHS = ['pelican-plugins']
PLUGINS = ['sitemap']

STATIC_PATHS = ['pdfs', 'images', 'extra']
EXTRA_PATH_METADATA = {
    'extra/robots.txt': {'path': 'robots.txt'},
}

# Custom pages configuration
PAGE_SAVE_AS = '{slug}.html'
PAGE_URL = '{slug}.html'

# Direct templates (for index, tags, etc.)
DIRECT_TEMPLATES = ['index', 'tags', 'categories', 'archives', '404']
PAGINATED_TEMPLATES = {
    'index': None,
    'tag': None,
    'category': None,
    'author': None,
}

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True
