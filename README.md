# front-end-technologies-in-posts-app
App for publishing posts, recreated in different front-end technologies(Angular, React, Svelte and Vue) to facilitate comparison.

# Application

* "/" - search and list preview posts;
* "/post/{id}" - create or update post;
* "/view/{id}" - visualisation post.

# Back-end

API used: https://crudcrud.com.

This API uses a key(endpoit) that is only valid for 24 hours or 100 requests.

So I recommend using an anonymous tab in the browser to access the link above and get a new key, and then change the "ENDPOINT_CRUDCRUD" property in the ".env" files for each project.
