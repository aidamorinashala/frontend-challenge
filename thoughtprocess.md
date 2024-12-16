# Thought process 

## Challenge 1
### Initial steps
1. Reading through the instructions and go through tech stack and code.

2.Chosing to use pnpm. Have worked with it before and I like the speed of it and
 
3. Then adding the react-query as dependency. Why I chose it are a few of the many features they offer: it covers caching, memoization, updates out of date data and handles pagination and infinite scroll functionality. 

4. Wrapping initially the query client in the product grid layout. Have to check if root layout is good or not for this. Will circle back to it. 

5. Then using chatgpt to start with the challenge number one. I asked it like this: You are a frontend developer with modern technology experience in next.js, react 19 features, react-query and typescript. I need you to: Create a responsive grid/list view of products from the existing data, with a toggle button to switch between grid and list view. Current code at the moment that needs to be redone. (pasted in the code). 

### Next steps 
Reviewing the code and look and feel give from chatgp I also then prompted to include lucide icons since I didn't do that in the first prompt.  
Here is the prompt:  You can also use lucide react for icon, so can you update the code including the icons from there that fits for list and grid.

After that since it was very bare and hasn't included other fields from the product data I prompted it the following: 
*So the next step I would like to do is update the cards to include also any of these fields, like image, short description and which category it belongs to:     
"shortDescription": "Our golden-inspired Bacon brings a taste of luxury to your all lifestyle",
    "image": "https://picsum.photos/seed/9d1bcdd6-ea7e-4a2f-922e-b1375b7a39cd/800/800",
    "category": "Garden",
    "stock": 74,
    "rating": 1 
And it is important that the card has nice features of this for example for the category to be pill like. The image has to be Image next js. we need to think also that everything is to be optimized.*

Reviewing the new code and I see the improvments and I test that it toggles correctly, and is responsive. But I am not happy with some things like the star ratings styling and that is added kr to the price since it it not stated anywhere which currency. But I change it to dollar just for the title and descriptions being in English. I also don't like that is not enough whitespace between some elements. 

Upon checking the Image it is also missing the sizes property and using legacy properties. Updating it be with the new ones. At this stage I haven't decided if images should be lazy loaded as well. Have to see the effects of performance with the infinite scroll. 

My next step is now to refactor the ProductGrid with the elements to be into reusable components and extract types and other things like hooks to be reusable. 

After this I decided to tackle the infinite scroll. First I read about it and also check what they say about infinite scroll and usability. I have heard talks with people who are disabled in some way who have never been positive about infinite scroll. Indeed various sources mention it is not a good idea depending what the application is about. In this case it would be considered a bad idea. Implementing it just for the sake of the challenge. But keeping it in mind and prompting chatgpt:  *you are an expert frontend developer who use modern technologies with next.js latest, react 19 and new features and tailwind, lucide react, react query. The code that is at the moment fetches a limit of 10 but I need to do infinite scroll. Here is the code and update to use infinite scroll but think about also performance and accesibility, user experience in mind*
Chatgpt changes to use the infinite solution from react query but also adds an Intersection observer. I learned something new here! How convenient is this!
Reviewing and testing it. Not very smooth but that could be an area of improvement but out of scope and time.

## Challenge 2 
Continue to use the react-query for this and adding the plugin to use for persitent storage. Instead of adding a new library.

Then refactoring the query client provider to be in own file and import in root layout. 

Deciding to do a hook for useCart. 

Weighting in if I should do optimistic UI for adding to cart but lack of time and opting out.

Using react-hot-toast because lighweight and not so much to config for this challenge. 

## Todos 
- [x] Check for root layout and query client provider for react query
- [ ] Image lazy loading Next.js 
- [ ] If time fix stars to be aligned at the bottom always to a fixed position.
- [ ] If time fix the loading and error handling to be prettier. 
- [X] Accesibility on some elements 


## Final thoughts and what where opted out 
- Not handling if the short description goes over. Would solve with truncating it with eclipse solution.
- Would if there was more time structure and divide further into components for ProductCard, ProductCardContent for example.
- Would also if there was more time to get rid of divs and use more semantic html since I prefer that structure and for usability and accesibility reasons.
- The loading element if there was more time I would have made it into being skeleton like loading instead.
- The star rating is now naivly taking as if the rating is 5 out 5. No checking if other rating system exist. I would have made such functionality then to check so right system would be used.
- Infinite scroll smootheness animation.
- If I would have more time I would check more on accesibility on the solutions.
- The cart has a delay to show the adding of the item the optimal would be a instant update and use optimistic ui. 