---
title: Create your merge request
description: To put your profile up on our organization website, you first need to create a data model and find your subgroup.
position: 3003
category: Contributing
---

## You can merge your changes, but ask nicely :)

When developers around the world to collaborate on large projects, how do they ensure that there is order when merging branches back into the main or master branch?

Well...they submit a request to the repository maintainers with merge access to merge their changes. Thus, we have the merge request.

A Merge Request (MR) is a request to merge one branch into another.

<alert>
You may have heard of pull requests and merge request. While both mean the same thing, the difference is that pull request is used by Github and merge request is used by Gitlab. 
</alert>

Previously, we had created a new branch inside our fork and committed our profile data model's changes to that branch.

We now need to merge these changes into the master branch of the source repository so we can see our profile appear on the live https://org.grey.software website.

## Action Items

### ✅ Create a merge request

Click on the **create merge request** button from your branch's page

![Creating your merge request](/create-merge-request.png)

Inside your Merge Pull Request,

- **Assignees** -> Assign to yourself
- **Reviewer** -> ArsalaBangash
- **Label** -> Type::Onboarding
- [x] Delete source branch when merge request is accepted.

and Submit the Merge Request to the Reviewer.

![Your new merge request](/new-merge-request.png)

Your reviewer will review your changes and merge them into the master branch if accepted.

### ✅ Now...we wait!

Once your merge request has been approved, head over to your designated team page inside of https://org.grey.software and you'll see your Profile Card.

![alt text](/output.png "Merge Request")

<alert>
Note that it may take a couple minutes for the website to rebuild once your changes have been merged in, so you may have to wait before you see your profile card up on the website.
</alert>
