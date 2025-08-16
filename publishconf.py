# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys

sys.path.append(os.curdir)
from pelicanconf import *

# If your site is available via HTTPS, make sure SITEURL begins with https://
SITEURL = "https://pythonistas-gdl.org"
RELATIVE_URLS = False

FEED_ALL_ATOM = "feeds/all.atom.xml"
CATEGORY_FEED_ATOM = "feeds/{slug}.atom.xml"

DELETE_OUTPUT_DIRECTORY = True

# Sitemap configuration for production
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

# Plugins for SEO (needed for production)
PLUGINS = ['pelican.plugins.sitemap']

# SEO Configuration (from pelicanconf.py)
SITE_DESCRIPTION = 'Comunidad de entusiastas de Python en Guadalajara, México. Únete a nuestras reuniones mensuales, charlas técnicas y networking con otros pythonistas.'
SITE_KEYWORDS = 'Python, Guadalajara, programación, desarrollo, comunidad, reuniones, charlas técnicas, networking, México, Jalisco'

# Following items are often useful when publishing

# Google Analytics
GOOGLE_ANALYTICS = "G-9EXYE4DWXZ"
