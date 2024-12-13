# Thought process 

## Initial steps
1. Reading through the instructions and go through tech stack and code.

2.Chosing to use pnpm. Have worked with it before and I like the speed of it and
 
3. Then adding the react-query as dependency. Why I chose it are a few of the many features they offer: it covers caching, memoization, updates out of date data and handles pagination and infinite scroll functionality. 

4. Wrapping initially the query client in the product grid layout. Have to check if root layout is good or not for this. Will circle back to it. 

5. Then using chatgpt to start with the challenge number one. I asked it like this: You are a frontend developer with modern technology experience in next.js, react 19 features, react-query and typescript. I need you to: Create a responsive grid/list view of products from the existing data, with a toggle button to switch between grid and list view. Current code at the moment that needs to be redone. (pasted in the code). 

## Next steps 
Reviewing the code and look and feel give from chatgp I also then prompted to include lucide icons since I didn't do that in the first prompt.  
Here is the prompt:  You can also use lucide react for icon, so can you update the code including the icons from there that fits for list and grid.

After that since it was very bare and hasn't included other fields from the product data I prompted it the following: 
So the next step I would like to do is update the cards to include also any of these fields, like image, short description and which category it belongs to:     
"shortDescription": "Our golden-inspired Bacon brings a taste of luxury to your all lifestyle",
    "image": "https://picsum.photos/seed/9d1bcdd6-ea7e-4a2f-922e-b1375b7a39cd/800/800",
    "category": "Garden",
    "stock": 74,
    "rating": 1 
And it is important that the card has nice features of this for example for the category to be pill like. The image has to be Image next js. we need to think also that everything is to be optimized.

Reviewing the new code and I see the improvments and I test that it toggles correctly, and is responsive. But I am not happy with some things like the star ratings styling and that is added kr to the price since it it not stated anywhere which currency. But I change it to dollar just for the title and descriptions being in English. I also don't like that is not enough whitespace between some elements. 

Upon checking the Image it is also missing the sizes property and using legacy properties. Updating it be with the new ones. At this stage I haven't decided if images should be lazy loaded as well. Have to see the effects of performance with the infinite scroll. 

My next step is now to refactor the ProductGrid with the elements to be into reusable components and extract types and other things like hooks to be reusable. 


## Todo 
- [ ] Check for root layout and query client provider for react query
- [ ] Image lazy loading Next.js 
- [ ] If time fix stars to be aligned at the bottom always to a fixed position.
- [ ] If time fix the loading and error handling to be prettier. 


## Final thoughts and what where opted out 