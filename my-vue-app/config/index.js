'use strict'

const isProd = process.env.NODE_ENV === 'production'

const baseApiUrl = isProd ? 'http://www.site.com/api' : 'http://localhost:55926/'