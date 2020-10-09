# Front-end Technologies in Posts App
App for publishing posts, recreated in different front-end technologies(Angular, React, Svelte and Vue) to facilitate comparison.

### Used in all applications
 * States;
 * Forms;
 * Events (use, creation);
 * Communication between components;
 * Alerts (success, form validation);
 * UI Components (Material-UI, Bootstrap, Icons);
 * Text Editor (quill);
 * Routes control (parameters);
 * Consume API (axios);
 * Post CRUD.

### Routes
 * "/" - search and list preview posts;
 * "/post/:id" - create or update post;
 * "/view/:id" - visualisation post.

# Back-end

API used: https://crudcrud.com.

This API uses a key(endpoit) that is only valid for 24 hours or 100 requests.

Therefore, i recommend using an anonymous tab in the browser to access the link above and obtain a new key, and then change the "ENDPOINT_CRUDCRUD" or "API_URL" property in the ".env" files for each project.
