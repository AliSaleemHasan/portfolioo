This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Clone this portfolio

First, clone this repository

```bash
git clone https://github.com/AliSaleemHasan/portfolioo
```

### edit information

to edit information and put your personal information you can edit files inside info folder

- BlockInfo.ts : to change artBlock colors and style
- homeComponentsInfos : to change infos for each components in home component
- workComponentsInfos : for work components informations
- change animation from animationVariants folder

# PS

- to change right component to custom component you need to add if statement to mainChildrensHelper.tsx file in helper folder to add the component to the list , then adjust homeComponentsInfos.ts and change right name and properties to what ever you created
- make sure that new component props is object name properties with props inside

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
