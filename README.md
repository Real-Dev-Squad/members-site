[![Better Uptime Badge](https://betteruptime.com/status-badges/v1/monitor/5hv0.svg)](https://betteruptime.com/?utm_source=status_badge)

# website-members

The part of the website that shows the members of RDS
This page is hosted on: https://members.realdevsquad.com/

# How can I contribute?

You can find a detailed guide [here](./CONTRIBUTING.md)!


# Coding Conventions

### There are only 2 things in computer science: cache invalidation & naming things  — *********Phil Karlton*********

## Imports Order 
- External Libraries 
- Internal Libraries
- Components 
- Types 
- Images 
- CSS 

## Commits style:

- Make Atomic commits of changes, even if they are across multiple files in logical units.
    - Add displayName to make the Header clear
    - Remove unused date format
    - Chore change library version
    
- It's alright to add a Description even if it's big we want to understand things just by reading the commit description at times.

## Branch Naming:

- Follow a simple Convention

```jsx
feat: creating new features
mod: modifying existing feature
opti: for optimization existing flow
hotfix: you know what it means
poc: for proof of concept
refact: for  cleanup and refactor

```

## Naming convention:

- the names shall be short & self descriptive

example

```jsx
	/*BAD*/
const value = 5 //what is this value ?
const isPagination = true // what does it do ?

/*GOOD*/
const initialIndexValue = 5;
const isPaginationEnabled = true 
```

## Sanity:

- avoid & follow

```jsx
//bad
const onItmClk =()=>{}

//good
const onItemClick = () => {}

const onProceedBtnClick = () => {}
```

## Folder structure:

- Files that are used in another specific file name them using the following convention
- `avatar.types.ts`, `avatar.constants.ts`, specific components used in parent component inside the same folder itself
- example folder structuring [https://www.joshwcomeau.com/react/file-structure/](https://www.joshwcomeau.com/react/file-structure/)

## PR:

- Description
- files changed: local or package?
- Screenshots
- Dev sanity
