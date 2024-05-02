# Technical Test where we are gonna to manage two APIs

**APIs**

- Random Facts: (link)[https://catfact.ninja/fact]
- Random Image: (link)[https://cataas.com/cat/says/hello]

Get a random cat fact and show a cat image with the first word of the fact

So what I think we've to do is, with one click render a random image and a random text, BUT, the cat image should contain the first word of the text, as we can see, in the cat's URL, the last paramter indicates the word the image should show, in that case each image will have the word 'hello'

1. Fetch the fact
2. Get the first word of the fact
3. Fetch the cat image passing the first word fact
4. With the same button we should see everything