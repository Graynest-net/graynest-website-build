# TODOS

## Site

### Split the clinics-one-pager branch by theme before merging

**What:** Separate clinics, teardown, video and agent/site work into reviewable branches.
**Why:** One branch is 127 files ahead of `main`. It is hard to review and hard to roll back as one unit, and the repo is linked to a v0 project that can push to `main`.
**Pros:** Rollback by theme; smaller reviews; safer against a v0 overwrite.
**Cons:** Needs a decision on what counts as one theme; some commits touch several themes.
**Context:** Decided in the 2026-10-03 CEO review (T3). Do it at merge time. Last pushed head: `3e62fe1`.
**Effort:** human ~half day / CC ~20 min (S-M)
**Priority:** P2
**Depends on:** none

### Browser regression tests for launcher, drawer and contact route

**What:** Add a small Playwright suite for the Ask GrayNest launcher, invite card, drawer landing and `/api/contact` validation.
**Why:** The repo has no tests. The 2026-10-03 QA run found two mobile layout bugs nothing would catch.
**Pros:** Catches layout and flow regressions on every visual change.
**Cons:** Adds test infrastructure to maintain.
**Context:** Decided in the 2026-10-03 CEO review (T2). Seed assertions from the QA report in `.gstack/qa-reports/run-20261003T112758Z/`: at 375px the invite chat button must be 36x36 (measured 29x36, ISSUE-001); the collapsed pill must be square (measured 44x48, ISSUE-002); desktop card appears after about 4s and stays dismissed after reload.
**Effort:** human ~1 day / CC ~30 min (M)
**Priority:** P2
**Depends on:** none

### Agent hands a qualified lead to the inbox

**What:** Have the Ask GrayNest agent collect name, email and project, and send the same email the contact form produces, with a chat summary.
**Why:** The agent is the most visible CTA but captures no lead; high-intent conversations end unrecorded.
**Pros:** Turns the agent into a second lead door.
**Cons:** Needs an ElevenLabs tool setup outside this repo, plus the contact route's validation and rate limit.
**Context:** Deferred in the 2026-10-03 CEO review (E1). Do it after the agent-off fix, the AI label and the contact rate limit have landed, and after confirming the production agent ID is set.
**Effort:** human ~2 days / CC ~1 hr (M)
**Priority:** P2
**Depends on:** rate limit on `/api/contact`, agent-off fix (R1), AI label (R3)

## Completed
