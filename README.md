# URL Shorten-er

The URL shorten-er project - git.ac works like common URL shortening services like http://bit.ly or http://goo.gl etc.

Features -

- Login / Signup / Logout
- Create shortcodes for their URLs (which are randomly generated 5 digit alphanumeric)
- Create custom shortcodes (like /mycode) for their URLs
- There would be stats available for how many times each shortlink has been opened. Also the traffic stats will have details of the referrer URL (which gives information on where the traffic is coming from). (Future)
- List all of their shortcodes with stats
- Update / Delete shortcodes

## Schema

### Common

Every enitites will these in common

- `id`: integer autoincrement
- `createdAt`: date
- `updatedAt`: data

### Users

- `email`: string unique
- `password`: string

### URLs

- `longUrl`: string -> original url
- `shortUrl`: string -> madeup url
- `ownerId`: integer -> id of user who created it