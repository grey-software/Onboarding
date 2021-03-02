---
title: Your First Contribution
description: ''
position: 8
category: Contributing
---

Alright! You're now ready to get started with your first contribution to Grey Software! 

You'll use modern software development tools to add your profile to https://org.grey.software/team *without leaving your browser*!

## Creating a new branch

Got to the **https://gitlab.com/grey-software/org** and create your new branch 

![alt text](/Creating_a_branch.png "Creating a new branch")

enter the branch name for example : **YOUR_GITLAB_USERNAME** and then click 

![alt text](/onboarding_creating_branch.png "Creating a new branch")

### Create your profile data model

<code-group>
<code-block label="YAML" active>


  ```
  name: YOUR_NAME_HERE
  avatar: https://gitlab.com/uploads/-/system/user/avatar/2274539/avatar.png
  github: <YOUR GitHUB LINK>
  gitlab: <YOUR GITLAB LINK>
  linkedin: <YOUR LINKEDIN LINK>
  ```
 </code-block>

 </code-group>

**_you can add your avatar link by go to your Gitlab Profile . Right Clicking and Copy the Image Address_**

## Find your subgroup


| Staff | University Apprentices | Board of Directors | Advisory Board | Volunteer    |
| ----- | ---------------------- | ------------------ | -------------- | ---          |
|       |                        |                  |                |              |
| [Staff](https://gitlab.com/grey-software/org/-/blob/master/content/en/Team/staff.md)  | [University Apprentices](https://gitlab.com/grey-software/org/-/blob/master/content/en/university-apprentice/uet-mardan.md)                |     [Board of Directors](https://gitlab.com/grey-software/org/-/blob/master/content/en/Team/board-of-directors.md)               |              [Advisory Board](https://gitlab.com/grey-software/org/-/blob/master/content/en/Team/advisory-board.md)  | [Volunteer](https://gitlab.com/grey-software/org/-/blob/master/content/en/Team/volunteers.md)            |

## Merge Request

A Merge Request (MR) is a request to merge one branch into another.

As Previously, we created a new branch and inside the branch we commit new changes. Now we need to commit these changes to the master branch so we can see the changes on the website.

* Click on the **create merge request** as shown in the below figure

![alt text](/Merge-req.png "Merge Request")

Inside your Merge Pull Request , 
* **Assignees** -> Assigned to yourself
* **Reviewer** -> ArsalaBangash
* **Label** -> Type::Onboarding 
* [X] Delete source branch when merge request is accepted.

and Submit the Merge Request to the Reviewer.

Pipeline will check your code and passed if there is no error .( _Incase you are facing any error you can contact the Reviewer_)
Reviewer will review your changes and merge it to the master branch if accepted .
![alt text](/Merged.png "Merge Request")

Go to https://org.grey.software and to go the respective category you commits and you can have your Profile Card. 

![alt text](/output.png "Merge Request")

**_if you are facing any error you can contact the Grey Software Team_.**