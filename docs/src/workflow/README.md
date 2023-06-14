# Workflow

Once you have setup the codebase in localmachine. Now lets begin the magic.


## Github Flow

We will have 3 branch in total

 ### Feature Branch

  This is branch for creating a new feature and is always created from the ***master / main*** branch once a developer starts working on any specific feature like homapage sections or pdp revamp or subscription buybox. All of the dev work and unit testing to be done within this branch. Naming convention would be 
  ```
  feature/feature_name
  // eg: feature/pdp_subscription_buybox
  ```
  
  ::: warning Notice

  Create a PR off to main , and assign it for a code review.
  :::

### Staging 

 This is the branch where we would do the integration testing. Once feature development is done, feature branch is merged to staging and functional testing is done. This branch might contain the broken code as well, as this is the branch for testing. 
 This is really helpful if multiple people are working on the same branch.

::: warning Notice
 Feature branch should be code-reviewed and approved before merging to the staging branch.
:::

### Pre-Prod 

This is the branch where all the feature that are ready for client-review are pushed. Once all the testing are done and is ready for client review.  We will merge those feature branch and do a quick sanity if everything is working as expected we should deploy it to pre-prod theme and use that url to submit for client approval.

::: tip 

In order to have a bit peace of mind, always rebase your pre-prod branch with main. using below command. 

```bash
git checkout master
git pull origin master
git checkout pre-prod
git rebase master

```
:::

This branch might have multiple feature branch that are ready for client review. 

::: tip 
Create a PR of your feature branch off to pre-prod branch and do ***squash and merge**
:::


### Master

This is the stable codebase branch, once everything is verified in pre-prod. 
Create a PR of pre-prod off to master. 
Do a quick recap on the changes , and then merge the pre-prod branch to master. 


::: warning

Its important that we have the track of the branches and their respective PR , so in order to maintain that always do 
***rebase and merge** when merging pre-prod to master.

:::

Once done , deploy the master branch to the theme , and we are ready to go live. YAY!!!

<div class="block-space"></div>
 

## Shopify Flow

We need 3 themes for smooth workflow.

If these theme doesnt exist , simply clone the live one and rename it. 

::: tip 
You only need to setup this once 
:::

### Dev Theme

This is the theme where we will work during our feature development. Naming convention should be 
***Dev Theme - {Your name}*** . 

This theme will have the code from our feature branch during development phase.


### Staging Theme

Once feature development is done along with the unit testing, merge feature branch to staging branch (check github workflow for details).
Once merged, deploy that code to this theme. i.e, Staging by simply following this command. 

```bash
yarn deploy
```
When prompt to select the theme , select staging theme from the list.


### Pre-prod Theme

Once everything is verified on staging theme , merge ***feature branch*** to pre-prod branch and then deploy that code to this theme, i.e, pre-prod theme. Once done submit the theme url for client review.


<div class="block-space"></div>

## Deployment

Once verified by client , merge pre-prod branch to master , and deploy that code to new theme first by cloning the live theme this helps in rolling back the changes if anything goes wrong just in case. 

- Clone the live theme
- Rename it to ***Release_dd/mm/yyy***
- Deploy master branch to theme using 

```
 yarn deploy

```

When prompt to select the theme , select release theme from the list.

- Do a quick sanity and then publish the theme

