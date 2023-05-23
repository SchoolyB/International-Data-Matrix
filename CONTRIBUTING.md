  # Contribute to The International Data Matrix!

 ## Making pull requests:
1. Fork the repo and create your branch from `development`.
2. If you've added/removed dependencies please update the `README.md`.
3. When naming your branch please follow these guidelines:
  - Prefix all branch names with `client-side/` or `server-side/` depending on where the majority of your contributions will be written in.
  - Following the `/` add no more than 4 words separated by `-` explaining what is being worked on in the branch. <i>Example:</i>  ```client-side/nav-menu-styling-change``` or similarly ```server-side/fastify-server-bug-fix```
   - If the branch has an associated issue add the issue number to the end of the branch name. <i>Example:</i>
 ```client-side/nav-menu-styling-change-300``` or similarly ```server-side/fastify-server-bug-fix-587```
 ***NOTE***  If there is no associated issue a number at the end of your branch name is not required.
1. When submitting your PR request to merge it the `development` branch.



## Making an issue:

<p><b>Features Requests</b></p>

1. If the issue is a feature request prefix the issue with `Feature:` Following the colon add a brief description about the feature you are requesting. <i>Example:</i>
```Feature: More output languages in translator```

2. Add a comment that gives further context and justification about the feature you are requesting. ***NOTE*** If you have any technologies, working examples, information sources, etc that could help implement this feature please add them to to the comment. <i>Example:</i>
```It seems like the translator is missing the Spanish and Romanian languages. I think it would be great to have more variety of translator output languages if possible. I found this cool translator API that has Spanish and Romanian amongst other languages online. Here is a link to the API's docs  https://coolapi/docs.com```

<p><b>Bug Reporting</b></p>

1. If the issue pertains to a bug that you or someone else has found prefix the issue with `Bug:` Following the colon add a brief description of the bug. <i>Example:</i>
```Bug: Country names showing as {state.name} rather than actual names ```

2. Add a comment explaining where the bug was found. This can be done in text or a screenshot. Include if have been able to recreate the bug and the steps taken to do so. ***NOTE*** If you have have guidance or thoughts on a possible course of action to fix the bug add it to the comment as well. <i>Example:</i>
```I found this bug when looking at https://international-data-matrix.vercel.app/Country/us.  The name of the country should be appearing but all I am seeing is {state.name}. Not sure how exactly to fix it but maybe its in the [id].tsx file```
