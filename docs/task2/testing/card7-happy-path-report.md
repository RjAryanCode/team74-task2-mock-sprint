# Card 7, Login to Team Page (Happy Path)

**Tested by:** Shaikh Zarin Tasnim (Dev 2)
**Date:** 16 August 2026
**Site:** https://team74-task2-mock-sprint-frontend.vercel.app/ (the deployed site, not localhost)
**Browser:** Chrome
**Account:** the test account Reshan gave me
**Checked against:** `docs/task2/Restyling_Requirements.md` and `docs/MOCKUP-DESIGNS/`

---

## Summary

The main flow works. I logged in on the deployed site with a valid account and the team
page showed all five of us with our details. Two things were not what I expected. Logging
in takes you to the Dashboard instead of the team page, and the login page is missing a
few things from Walaa's mockup.

---

## What I tested

### 1. Login page loads

Evidence: `screenshots/07-01-login.png`

**Result:** Pass. The page loads and the form works.

I compared it with `Log in mockup.png` and found these differences:

* The heading says "Sign in" but the mockup says "Log in".
* The mockup has a "Forgot password? Reset it here" link under the password box. It is
  not on the built page.
* The mockup has big light grey boxes with Email and Password written inside them. The
  built page has smaller dark boxes with the labels above them.
* "Don't have an account? Create one" sits above the button and is not in the mockup.
* There is a "Continue with Google" button that is not in the mockup. I do not think this
  is a mistake. The requirements say the restyle is not allowed to change the login
  methods, so taking it out would have been wrong. The mockup just does not show it.
* The line "Enter your details to continue" matches the mockup exactly.

### 2. Logging in with a valid account

Evidence: `screenshots/07-02-logged-in-dashboard.png`

**Result:** Pass. It worked first time.

### 3. Going to the team page after login

Evidence: `screenshots/07-02-logged-in-dashboard.png` and `screenshots/07-03-team-page.png`

**What the card says should happen:** you get taken to the team page after logging in.

**What actually happened:** it took me to the Dashboard page. There is a Team link in the
sidebar and clicking that takes you to the team page fine.

Riley's requirements only say a logged in user has to be able to reach the team page
through the normal navigation, and that does work. So it passes her requirement but not
the wording on the card. Worth asking Aryan which one he meant.

### 4. Content on the team page

Evidence: `screenshots/07-03-team-page.png`

| What the requirements ask for | Result |
|---|---|
| Team name shown as the main heading and not blank | Pass. It says "Editor Academy Team". Should this say Team 74? |
| Every member has a name and it is not blank | Pass, all five |
| Every member has a photo | Pass |
| Every member has a role from the allowed list | Pass. UX Designer, Business Analyst, Project Manager, Developer, Developer |
| Every member has a blurb | Pass |
| Photo, name, role and blurb grouped together per person | Pass, but see below |

**About the grouping:** each person's details are clearly inside their own card so you can
tell whose is whose. But the photos are all different shapes, so the names and roles sit
at different heights across the row. Riley's photo is much shorter than everyone else's so
his name sits higher than the rest. The requirements say the photos should look consistent
between members, so I do not think this fully meets that. I logged it as a bug in the card
8 report.

### 5. Staying logged in after a refresh

**Result:** Pass. I pressed F5 and was still logged in.

---

## Problems I found

The full steps for these are in `card8-edge-cases-report.md`.

1. Logging in goes to the Dashboard instead of the team page.
2. The photos are different heights so the member cards do not line up.
3. The app name in the corner still says "My web app". It looks like the setting was not
   filled in on Vercel, so nothing on the site says Team 74 or Editor Academy.
4. The "Forgot password? Reset it here" link from the mockup is not on the built page.

---

## Conclusion

The main flow passes. You can log in on the deployed site, get to the team page, and all
the content that is meant to be there is there and correct. The problems above are worth
fixing but none of them stop the flow from working.
