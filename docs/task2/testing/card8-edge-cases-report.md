# Card 8, Edge Cases and Bugs

**Tested by:** Shaikh Zarin Tasnim (Dev 2)
**Date:** 16 August 2026
**Site:** https://team74-task2-mock-sprint-frontend.vercel.app/ (the deployed site)
**Browser:** Chrome
**Checked against:** the edge cases in `docs/task2/Restyling_Requirements.md`

---

## Summary

I tested the edge cases Riley listed, plus a few extra ones from her list of things the
restyle is not allowed to change. Most of it passed but I found four bugs. The biggest one
is that Google sign in does not work at all on the live site. The second is that the team
cards do not stack on a phone screen.

---

## What I tested

### 1. Opening the team page while logged out

Steps: logged out, then pasted the team page URL into the address bar.
What should happen: it sends you to the login page.
Evidence: `screenshots/08-05-direct-access-redirect.jpg`

**What happened:** Pass. It showed a loading spinner for a second and then sent me to the
login page. The spinner means the page starts loading before it checks if you are logged
in, but you never actually see the team page content.

### 2. Wrong password

What should happen (from `Log in (wrong password).png`): a red border around the password
box and "The password you entered is incorrect" written under it.
Evidence: `screenshots/08-02-wrong-password.jpg`

**What happened:** it correctly refused to log me in, but the error looks different to the
design. I got a small red box in the top right corner saying "Invalid email or password".
There was no red border and nothing written under the field.

### 3. Email that is not registered

What should happen (from `Log in (wrong email).png`): a red border around the email box and
"This email address is not registered" written under it.
Evidence: `screenshots/08-03-wrong-email.jpg`

**What happened:** it correctly refused to log me in, but I got exactly the same corner
message as the wrong password test.

One thing worth saying. If a site tells you an email is not registered, someone could use
that to work out which accounts exist. So the general message the site uses is probably
safer than what the mockup asked for. I do not think this is Reshan doing it wrong, it is
more something Riley and Walaa should decide on.

### 4. Empty fields

Steps: pressed Log In with both boxes empty.
Evidence: `screenshots/08-04-empty-fields.png`

**What happened:** Pass. Both boxes went red with "Please enter a valid email address" and
"Password is required" written under them.

This is the same style the mockups asked for, so the site can already do it. It just does
not use it for wrong passwords or emails.

### 5. Photo that does not load

Steps: used Chrome devtools to change one photo's link so it would not load.
What should happen: a placeholder shows instead of a broken image.
Evidence: `screenshots/08-06-missing-photo.jpg`

**What happened:** Fail. There is no placeholder. The card just shows the alt text
"Shaikh" as normal text where the photo should be, and the card ends up smaller than the
others.

### 6. Very long blurb

Steps: used devtools to replace one blurb with about 300 characters.
What should happen: the card gets taller, the text wraps, nothing gets cut off or covers
anything else.
Evidence: `screenshots/08-07-long-blurb.jpg`

**What happened:** Pass. The card got taller, the text wrapped, and it did not spill out or
cover the cards next to it.

### 7. Phone size screen

Steps: Chrome devtools, iPhone SE size (375px wide).
What should happen: the member info stacks instead of scrolling sideways.
Evidence: `screenshots/08-08-mobile-width.png`

**What happened:** Fail. The cards stay next to each other and get cut off at the edge of
the screen, so you have to scroll sideways to see the rest of the team.

### 8. Google sign in

Why I tested it: the requirements say the restyle is not allowed to change the login
methods.
Evidence: `screenshots/08-09-google-signin-failed.jpg` and
`screenshots/08-10-google-signin-console-error.jpg`

**What happened:** Fail. Clicking "Continue with Google" gives "Google sign-in failed.
Please try again." The browser console explains why. The Vercel address is not in
Firebase's list of authorised domains, so Google login is blocked.

### 9. Staying logged in after a refresh

Steps: logged in and pressed F5.

**What happened:** Pass. Still logged in. I did not take a screenshot of this one.

---

## Bugs

### Bug 1. Google sign in does not work on the live site

**How bad:** High. One of the login methods does not work at all.

**How to reproduce:**
1. Open https://team74-task2-mock-sprint-frontend.vercel.app/
2. Click "Continue with Google"

**Should happen:** the Google account popup opens.
**Actually happens:** a red message saying "Google sign-in failed. Please try again." The
console says the current domain is not authorised for OAuth operations.
**Evidence:** `screenshots/08-09-google-signin-failed.jpg`,
`screenshots/08-10-google-signin-console-error.jpg`
**Note:** this is a setting, not a code problem. The fix is to add
`team74-task2-mock-sprint-frontend.vercel.app` in the Firebase console under
Authentication, Settings, Authorized domains.

### Bug 2. Team cards do not stack on a phone screen

**How bad:** Medium. The requirements ask for this specifically.

**How to reproduce:**
1. Open the team page
2. Make the browser 375px wide, or use devtools and pick iPhone SE

**Should happen:** the cards stack and stay readable.
**Actually happens:** they stay next to each other, get cut off at the edge, and the page
scrolls sideways.
**Evidence:** `screenshots/08-08-mobile-width.png`

### Bug 3. No placeholder when a photo does not load

**How bad:** Low.

**How to reproduce:**
1. Open the team page
2. Break one member photo's image link in devtools

**Should happen:** a placeholder or avatar shows instead.
**Actually happens:** only the alt text shows as plain text, and the card shrinks compared
to the others.
**Evidence:** `screenshots/08-06-missing-photo.jpg`

### Bug 4. Photos are different heights so the cards do not line up

**How bad:** Low.

**How to reproduce:**
1. Open the team page and look at where each person's name sits

**Should happen:** the photos look consistent between members, like the requirements ask.
**Actually happens:** each photo keeps its own shape, so the names, roles and blurbs sit at
different heights across the row. Riley's is the most obvious one.
**Evidence:** `screenshots/07-03-team-page.png`
**Note:** the image tag has `width="200" height="100"` on it with `height: auto` in the
CSS. I am not sure, but that might be why the heights come out different.

---

## Smaller things

Not really bugs but worth writing down:

1. The app name in the top left still says "My web app", which is the default that comes
   with the boilerplate. It looks like the setting was not filled in on Vercel, so nothing
   on the site says Team 74 or Editor Academy.
2. The photo alt text is only a first name. The requirements ask for meaningful alt text
   for accessibility.
3. The "Forgot password? Reset it here" link from the mockup is not on the built page.
4. The login error messages do not match the mockups, but as I said above the way the site
   does it now is probably safer. This needs a decision from Riley and Walaa rather than a
   fix from Reshan.

---

## Questions for the team

* Should the team page heading say "Team 74" instead of "Editor Academy Team"?
* Card 7 says redirect to the team page but logging in goes to the dashboard. Is the
  sidebar link what was meant, or was it supposed to go there automatically?
* Do we want the login errors inline like the mockups, or keep the general message because
  it gives less away?

---

## Handover

Bugs sent to Reshan (Dev 1) on 16 August 2026, posted in the Team 74 channel on Microsoft
Teams and tagging both Reshan and Aryan.

Evidence: `screenshots/08-11-bugs-reported-to-dev1.jpg`
