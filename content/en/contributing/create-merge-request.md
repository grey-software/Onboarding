---
title: Create your merge request
description: To put your profile up on our organization website, you first need to create a data model and find your subgroup.
position: 11
category: Contributing
---

## Merge your changes, but ask nicely :)

When developers around the world to collaborate on large projects, how do they ensure that there is order when merging branches back into the main or master branch?

Well...they submit a request to the repository maintainers with merge access to merge their changes. Thus, we have the merge request.

<alert>
You may have heard of pull requests and merge request. While both mean the same thing, the difference is that pull request is used by Github and merge request is used by Gitlab. 
</alert>

A Merge Request (MR) is a request to merge one branch into another.

Previously, we had created a new branch and committed our profile data model's changes to that branch.

We now need to merge these changes into the master branch so we can see our profile appear on the live https://org.grey.software website.

## Action Items

✅ Click on the **create merge request** as shown in the below figure

![alt text](/Merge-request.png "Merge Request")

Inside your Merge Pull Request,

- **Assignees** -> Assign to yourself
- **Reviewer** -> ArsalaBangash
- **Label** -> Type::Onboarding
- [x] Delete source branch when merge request is accepted.

and Submit the Merge Request to the Reviewer.

Your merge request will trigger a pipeline that will build a preview of your website so you can check if your profile data model correctly renders into your profile card in your designated file.

Your reviewer will review your changes and merge them into the master branch if accepted.

Now...we wait!

![alt text](/Pipelines.png "Merge Request")

Once your merge request has been approved to your designated team page inside of https://org.grey.software and you'll see your Profile Card.

![alt text](/output.png "Merge Request")

<alert>
Note that it may take a couple minutes for the website to rebuild once your changes have been merged in, so you may have to wait before you see your profile card up on the website.
</alert>