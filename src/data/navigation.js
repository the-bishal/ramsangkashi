import { Camera, Map, MapPinned, Menu, ScrollText } from 'lucide-react'

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/explore' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Packages', href: '/packages' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
]

export const iconMap = {
  menu: Menu,
  map: Map,
  camera: Camera,
  scroll: ScrollText,
  pin: MapPinned,
}
