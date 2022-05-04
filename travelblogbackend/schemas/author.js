export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      option: {
        hotspot: true,
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "username",
        maxLength: 96,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "username",
      media: "avatar",
    },
  },
};
