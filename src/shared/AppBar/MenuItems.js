export const MenuItems = [
  {
    header: 'Home',
    link: '/',
  },
  {
    header: 'Our Services',
    link: '/our_services',
  },
  {
    header: 'Blogs',
    link: '/blogs',
  },

  {
    header: 'Insurance',
    childs: [
      {
        name: 'We Accept',
        link: '/insurance_weaccept',
      },
      {
        name: 'Good Vibes',
        link: '/insurance_goodVibes',
      },
      {
        name: 'Packages & Promotion',
        link: '/insurance_package_promotion',
      },
    ],
  },
  {
    header: 'Clinic & Centers',
    link: '/clinic_centers',
  },
  {
    header: 'Health Screening',
    link: '/check_up',
  },
  {
    header: 'Packages',
    link: '/packages',
  },
  {
    header: 'About',
    childs: [
      {
        name: 'Bumrungrad',
        link: '/about_bumrungrad',
      },
      {
        name: 'Vision & Mision',
        link: '/about_vissionMisson',
      },
      {
        name: 'Factsheet',
        link: '/about_factsheet',
      },
      {
        name: 'Accreditation & Awards',
        link: '/about_accreditation',
      },
      {
        name: 'Bumrungrad & Foundation',
        link: '/about_foundation',
      },
    ],
  },
  {
    header: 'Contact',
    link: '/locate_us',
    // childs: [
    //   {
    //     name: 'Locate Us',
    //     link: '/locate_us',
    //   },
    //   {
    //     name: 'Hospital Information',
    //     link: '/',
    //   },
    //   {
    //     name: 'Direction & Taxi',
    //     link: '/',
    //   },
    //   {
    //     name: 'Ambulance',
    //     link: '/',
    //   },
    // ],
  },
]
