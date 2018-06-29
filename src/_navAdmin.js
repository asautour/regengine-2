export default {
  items: [
    {
      name: 'Admin',
      url: '/admin',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'Regulations',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Edit',
      url: '/admin/regulations',
      icon: 'icon-pencil',
    },
    {
      name: 'View',
      url: '/admin/regulations',
      icon: 'icon-star',
    },
    {
      title: true,
      name: 'Texts',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Edit',
      url: '/theme/colors',
      icon: 'icon-pencil',
    },
    {
      name: 'View',
      url: '/theme/typography',
      icon: 'icon-star',
    },
  ],
};
