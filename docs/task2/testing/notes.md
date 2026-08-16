# Testing notes

My rough notes from testing the login page and team page for cards 7 and 8. The tidied up
versions are in `card7-happy-path-report.md` and `card8-edge-cases-report.md`.

Tested by: Shaikh Zarin Tasnim (Dev 2)
Site: https://team74-task2-mock-sprint-frontend.vercel.app/
Browser: Chrome
Account: the one Reshan gave me
Date: 16 August 2026

---

## Card 7, normal login flow

**Login page (07-01)**

Loads fine on the deployed site. Compared it with Walaa's mockup and a few things are
different:

* Heading says "Sign in", mockup says "Log in"
* Mockup has a "Forgot password? Reset it here" link, the built page does not
* Mockup has big light grey boxes with the words inside, built page has smaller dark
  boxes with labels above
* "Don't have an account? Create one" is above the button and not in the mockup
* There is a Continue with Google button that is not in the mockup. Not a mistake though,
  the requirements say we cannot change the login methods so removing it would be wrong

**Logging in (07-02)**

Logged in fine but it took me to the Dashboard, not the team page. Card 7 says redirect to
team page and that did not happen by itself. There is a Team link in the sidebar and that
works.

Also the name in the top left says "My web app", which is the boilerplate default.

**Team page (07-03)**

Heading says "Editor Academy Team". Not sure if it should say Team 74.

All five of us are there. Everyone has a photo, name, role and blurb. Roles are all from
the allowed list.

The photos are all different shapes so the names do not line up across the cards. Riley's
photo is shorter so his name sits higher than everyone else's.

---

## Card 8, edge cases

**Team page while logged out (08-05)**

Spinner for a second, then it sent me to the login page. Pass.

**Wrong password (08-02)**

Got a red box in the top right saying "Invalid email or password". Mockup wanted a red
border on the field with a message under it.

**Wrong email (08-03)**

Same message as the wrong password one. Mockup wanted "This email address is not
registered" under the email box.

Saying an email is not registered would let people work out which accounts exist, so the
general message is probably safer. One for Riley and Walaa.

**Empty fields (08-04)**

Both boxes went red with messages under them. Pass. This is the style the mockups wanted,
so the site can do it, it just does not use it for login failures.

**Broken photo (08-06)**

No placeholder. Just the alt text "Shaikh" as normal text and the card shrank. Fail.

Alt text is only a first name. Image tag has width 200 height 100 with height auto in the
CSS, might be why the photos come out different heights.

**Long blurb (08-07)**

Card got taller, text wrapped, nothing spilled out. Pass.

**Phone size, 375px (08-08)**

Cards do not stack, they run off the side of the screen. Fail.

**Google sign in (08-09, 08-10)**

Failed. Console says the Vercel domain is not in Firebase's authorised domains list.
Setting, not code.

**Refresh while logged in**

Still logged in. Pass. No screenshot.

---

## Bugs

1. Google sign in broken on the live site (high)
2. Cards do not stack on a phone screen (medium)
3. No placeholder when a photo does not load (low)
4. Photos different heights so cards do not line up (low)

## Smaller things

* App name still says "My web app"
* Alt text is only a first name
* Forgot password link from the mockup is missing

## To ask the team

* Should the heading say Team 74 instead of Editor Academy Team?
* Was login meant to go straight to the team page, or is the sidebar link fine?
* Do we want the login errors inline like the mockups, or keep the general message?
