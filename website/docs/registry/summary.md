---
sidebar_position: 1
title: Summary
---
The widget registry aims to produce **two pieces from your component library repository**, so they can be uploaded to a publicly accessible location:

  1. The collection of **JS applications** that the CMS will be able to embed.
  2. The **manifest file `registry.json`** that contains the list and metadata of all the available widgets.

Once the CLI compiler has finished it will create an output directory in your machine, containing the following:

```
output
├── registry.json
└── widgets
    ├── inline-notification
    │   ├── thumbnail.png
    │   └── js
    │       └── main.js
    └── toast-notification
        ├── thumbnail.png
        └── js
            └── main.js
```

This output folder can then be uploaded (likely by your CI) to your server or cloud storage (like Storaj, S3, GitHub
Pages, ...). This will allow serving the results of the compilation. For instance:

```
https://s3.acme-widgets.us-east-1.amazonaws.com/marketing-site/registry.json
https://s3.acme-widgets.us-east-1.amazonaws.com/marketing-site/widgets/inline-notification/js/main.js
https://s3.acme-widgets.us-east-1.amazonaws.com/marketing-site/widgets/toast-notification/js/main.js
```

Finally, the CMS will be able to ping `https://s3.../marketing-site/registry.json` to offer CMS editors to embed _Inline
Notification_ and _Toast Notification_ (for instance in the WYSIWYG editor). When rendering a page that contains a 
_Toast Notification_ the CMS will know to parse the `registry.json` to add a `<script>` tag pointing to
`https://s3.../toast-notification/main.js`.

You can add as many JS apps as you desire. The CMS doesn't need to be updated, it will just get the new widgets and the
updates to the existing ones.
