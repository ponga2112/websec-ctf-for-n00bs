# Sitemap.md

[site]: https://[tbd].org/
# desc: Description of CTF web app
# auth: {~}
# date: 20-JAN-2020

## Static Site Page Structure
```
  |--> /  ( redirects to /#/intro if first visit, or /#/ctf/{category} if valid "state" cookie is present )
    |
    |--> /#/intro   ( descriptive "what is this site?" text; link to "let's get started" redirects to /#/start )
    |--> /#/start   ( "Hi, whats your name?" Enter first name or handle, AJAX POST to /api; Else if API not configured or reachable, stores in LocalStorage. In either case, redirects to /ctf/xss (the first challenge); else modal dialog with error message
    |               *If API enabled* :: Since this page "creates" a user, probably want Recaptcha or other bot prevention here.. )
    |--> /#/leaderboard  ( AJAX pulls from API the list of "users" and how many flags they have captured
    |                     cols: user_handle, count(flags), last_active_timestamp )
    |--> /#/ctf  ( redirects to /#/intro if no valid state cookie, otherwise /#/ctf/{category} as dictacted by state cookie )
    |--> /api  ( *RESERVED FOR API CALLS* )
    |--> /#/develop Dev space tools uses for creating this web app [DEPRECATED]
```

## CTF Site Page Structure /#/ctf/
```
  |--> /#/ctf/1   ( xss  )
  |--> /#/ctf/2   ( auth_bypass  )
  |--> /#/ctf/3   ( logic_bypass  )
  |--> /#/ctf/4   ( data_exposure  )
  |--> /#/ctf/5   ( dir_traversal  )
  |--> /#/ctf/6   ( misconfiguration  )
  |--> /#/ctf/7   ( sqli  )
  |--> /#/ctf/8   ( xxe  )
  |--> /#/ctf/9   ( lfi  )
  |--> /#/ctf/10  ( rce  )
```

##  API Schema/Structure /api *NOT part of the SPA frontend ~~ API to be implemented later...*
```
  {
    "token":
      varchar[32], // the token/persistant cookie (GUID). If empty return generated token, Else validate it
    "action": [
      getuser{
        "handle": varchar[15]
      },
      setuser{ // creates a "user" with the chosen handle
        "handle": varchar[12]
      },
      getctf{
        "id": int
      },
      setctf{
        "id": int,
        "flag": varchar[8]
      },
      leaderboard // returns leaderboard (top n players and their scores)
    ]
  }
```

##  {modals}
```
      ==: {modal}_terms # basic terms-of-use, disclaimer text
      ==: {modal}_error # if API calls are not happy, display why (text returned from API)
      ==: {modal}_info # info "pop-ups" that present textual information or list of external links to resources like OWASP, etc
      ==: {modal}_dialog # simple dialogs for user input (like player name, etc) or for nav purposes
      ==: {modal}_flag  # if a "flag" is captured, display the "flag" (just a string (easter egg) that they can write down/copy, also logged to /api)
```