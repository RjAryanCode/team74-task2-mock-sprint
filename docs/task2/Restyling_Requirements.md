# Feature requirements - Team Page and Login Restyling

| **Requirement**        | **Validation/display rule**                                                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Team name              | The page must display the team name prominently as the primary page heading. Team name must not be blank.                                        |
| Member name            | Each team member must have a displayed name. Name must not be blank.                                                                             |
| Member photo           | Each team member should have a profile photo or equivalent image. Image must include meaningful alternative text for accessibility.              |
| Member role            | Each member must have their project role displayed, either Business Analyst, UX Designer, Developer, or Project Manager. Role must not be blank. |
| Member blurb           | Each member must have a short textual description introducing the member and/or their contribution to the project.                               |
| Member grouping        | The photo, name, role and blurb for one member must be visually grouped so that it is unambiguous which information belongs to each person.      |
| Responsive layout      | Team information must remain readable and correctly associated on desktop and smaller viewport sizes.                                            |
| Accessibility          | Text must be readable, images require appropriate alt text, and page structure should use suitable semantic headings/content structure.          |
| Navigation after login | An authenticated user must be able to reach the team page through the intended project navigation/flow.                                          |

## Field rules

**Team name**

- Display once as the main identifying heading
- Must remain readable if longer than the expected example value
- Should wrap rather than overflow or be truncated unnecessarily

**Member name**

- Allow normal names containing spaces, hyphens, apostrophes and similar characters
- Longer names must wrap or otherwise remain fully readable

**Photo**

- Must have descriptive alternative text
- Must use a consistent presentation treatment between members
- If no usable photograph is supplied, display a designed fallback rather than a broken-image icon

**Role**

- Display in close visual association with the member's name
- Longer role names must wrap without breaking the card/page layout

**Blurb**

- Intended to be short, but the interface must tolerate longer-than-expected text
- Text must wrap naturally
- Content must not overlap other elements or escape its container

## Scope

The login work is presentation/styling only. Existing authentication logic and session behaviour are outside the scope of this feature and must remain functionally unchanged.

**The restyling may change:**

- colours;
- typography;
- spacing;
- alignment;
- visual hierarchy;
- borders, cards and backgrounds;
- responsive presentation;
- visual treatment of inputs, buttons, messages and other existing controls.

**The restyling must not change:**

- supported authentication methods;
- credential validation rules;
- Firebase authentication behaviour;
- session creation, storage or expiry behaviour;
- authenticated-user detection;
- email verification behaviour;
- successful-login routing;
- authentication error behaviour;
- Google sign-in behaviour;
- sign-up/authentication business rules.

## Edge Cases

| **Edge case**                           | **Required treatment**                                                                                                |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Member photo unavailable                | Show a consistent placeholder/avatar treatment.                                                                       |
| Member photo has unusual dimensions     | Crop/contain using the agreed image treatment without distorting the image.                                           |
| Long blurb                              | Card/page expands naturally; text remains readable and no content is clipped unexpectedly.                            |
| Different blurb lengths between members | Layout must remain coherent; members don't need artificially identical card heights unless UX chooses that treatment. |
| Small or mobile screen                  | Member information stacks/reflows rather than causing horizontal scrolling.                                           |
| Authentication error                    | Existing error behaviour remains available and visible after restyling.                                               |
| Login submission in progress            | Existing disabled/loading behaviour must remain usable after restyling.                                               |
