import { ArmchairIcon, GithubIcon, LinkedinIcon, NavigationIcon, SparklesIcon, Wand2Icon } from 'lucide-react'

export const PROFILES = {
  twitter: {
    title: 'X (Twitter)',
    username: 'omeralpi_',
    url: 'https://twitter.com/intent/user?screen_name=omeralpi_',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    )
  },
  github: {
    title: 'GitHub',
    url: 'https://github.com/omeralpi',
    icon: <GithubIcon size={16} />
  },
  // linkedin: {
  //   title: 'LinkedIn',
  //   url: 'https://www.linkedin.com/in/omeralpi',
  //   icon: <LinkedinIcon size={16} />
  // },
  // instagram: {
  //   title: 'Instagram',
  //   url: 'https://www.instagram.com/_omeralpi',
  //   icon: <InstagramIcon size={16} />
  // },
  '1000kitap': {
    title: '1000Kitap',
    url: 'https://1000kitap.com/omeralpi'
  },
  letterboxd: {
    title: 'Letterboxd',
    url: 'https://letterboxd.com/omeralpi',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="size-4">
        <path d="M521.3 128c65.6 0 118.7 53.1 118.7 118.6s-53.1 118.6-118.7 118.6c-42.5 0-79.7-22.3-100.7-55.8 11.4-18.2 18-39.7 18-62.8s-6.6-44.6-18-62.8l.8-1.2c20.8-32.3 56.8-53.9 97.9-54.6h2zM320 128c42.5 0 79.7 22.3 100.7 55.8-11.4 18.2-18 39.7-18 62.8s6.6 44.6 18 62.8l-.8 1.2c-20.8 32.3-56.8 53.9-97.9 54.6h-2c-42.5 0-79.7-22.3-100.7-55.8 11.4-18.2 18-39.7 18-62.8s-6.6-44.6-18-62.8l.8-1.2c20.8-32.3 56.8-53.9 97.9-54.6h2zm-201.3 0c42.5 0 79.7 22.3 100.7 55.8-11.4 18.2-18 39.7-18 62.8s6.6 44.6 18 62.8l-.8 1.2c-20.8 32.3-56.8 53.9-97.9 54.6h-2C53.1 365.1 0 312.1 0 246.6S53.1 128 118.7 128z"></path>
      </svg>
    )
  },
  // spotify: {
  //   title: 'Spotify',
  //   url: 'https://open.spotify.com/user/31zsk376ltun7btpvekcaldvsuoq'
  // },
  wikiloc: {
    title: 'Wikiloc',
    url: 'https://tr.wikiloc.com/wikiloc/user.do?id=13862390',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 256 256" className="size-4">
        <path d="M242.7 100.2c3.3-9.6 3.3-17 3.3-17-.6-43.6-54.5-57.3-63.6-59.3 8.7 5.2 22.1 18.8 29 30.8 10.4 21.4 3 34.7-8.5 43 2.2-4.4 4.6-11 4.9-19.4.5-11-1.5-29.7-29.5-56.3-15.4-7.4-32.6-11.5-50.8-11.5C62.6 10.5 10 63.1 10 128c0 12.3 1.9 24.2 5.4 35.4-6.6 56.8 67 73.5 74.5 76-7.9-4.2-16.7-10.2-20.8-14.5-30.7-27.1 1.8-53.4 1.8-53.4 24-21.5 71.1-22.1 71.1-22.1 23.6-.6 53.7-9.2 53.7-9.2 21.1-4.8 33.3-15.7 40.4-26.6-21.5 41.7-80 44.7-80.7 44.7-27.3 1.3-44.5 6.9-44.7 6.9C74.3 177 74.6 201 74.3 202.7c-.2 19.9 10.3 30.7 21.6 38 10.4 3 20.1 4.6 31.5 4.6 64.9 0 117.5-52.6 117.5-117.5 0-9-1-17.7-2.9-26.2l.7-1.4zm-74.1 10.1c-17.5 2-72.2 4.9-72.2 4.9-57.7 6.1-74.1 33.3-77.1 39.5-2.1-8.6-3.3-17.5-3.3-26.7C16 66.6 66 16.6 127.5 16.6c21 0 40.7 5.8 57.4 16 14 14.8 21.1 30.3 20.5 45.5-.4 11.1-4.7 19.1-6.8 22.4-13.6 7.8-30 9.8-30 9.8zm-41.1 129.2c-11.1 0-21.9-1.7-32.1-4.7l-1.6-.9c-.2-.1-17-9.6-17-31.1-.1-.9-1.4-23.2 34.7-35.2.2 0 17.1-5.5 44.1-6.8.2 0 20.1-.8 38.3-8.7 22.5-9.7 36.8-22 44.1-38.4.6 4.7.9 9.5.9 14.4 0 61.4-49.9 111.4-111.4 111.4z"></path>
      </svg>
    )
  }
}

export const TWEETS_COLLECTION_ID = 15896982

export const COLLECTION_IDS = [44787795]

export const LINKS = [
  {
    href: '/',
    label: 'Home',
    icon: <SparklesIcon size={16} />
  },
  {
    href: '/journey',
    label: 'Journey',
    icon: <NavigationIcon size={16} />
  },
  {
    href: '/stack',
    label: 'Stack',
    icon: <Wand2Icon size={16} />
  },
  {
    href: '/workspace',
    label: 'Workspace',
    icon: <ArmchairIcon size={16} />
  }
  // {
  //   href: '/bookmarks',
  //   label: 'Bookmarks',
  //   icon: <BookmarkIcon size={16} />
  // }
]

export const WORKSPACE_ITEMS = [
  {
    title: 'nurus ME TOO',
    url: 'https://shop.nurus.com/products/nurus-me-too-kisisellestirilebilir-calisma-koltugu',
    specs: 'Black'
  },
  {
    title: 'LG UltraWide 29WP60-B 29"',
    url: 'https://www.lg.com/tr/monitor/fhd-qhd/29wp60g-b/',
    specs: 'Black'
  },
  {
    title: '13" MacBook Pro',
    url: 'https://www.apple.com/nl/macbook-pro/',
    specs: 'Space Gray, M2, 16GB RAM, 256GB SSD'
  },
  {
    title: 'MoErgo Glove80',
    url: 'https://www.moergo.com/collections/glove80-keyboards/products/glove80-split-ergonomic-keyboard-revision-2-switches-not-soldered?variant=44253212573969',
    specs: 'White'
  },
  {
    title: 'Logitech MX Master 3S',
    url: 'https://www.logitech.com/nl-nl/products/mice/mx-master-3s.910-006560.html',
    specs: 'Pale Gray'
  },
  {
    title: 'Apple Airpods Pro',
    url: 'https://www.apple.com/nl/airpods-pro/',
    specs: '2nd generation'
  }
]

export const SCROLL_AREA_ID = 'scroll-area'
export const MOBILE_SCROLL_THRESHOLD = 20
export const SUPABASE_TABLE_NAME = 'pages'

export const MAX_BOOKMARK_SUBMISSIONS_PER_DAY = 5
export const BOOKMARK_SUBMISSION_COUNT_COOKIE_NAME = 'formSubmissionCount'

export const CONTENT_TYPES = {
  PAGE: 'page',
  POST: 'post',
  LOGBOOK: 'logbook'
}
