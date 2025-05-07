import InstagramIcon from '../assets/instagram.svg'
import BlueSkyIcon from '../assets/Bluesky Logo.png'
import YoutubeIcon from '../assets/youtube.svg'
import TwitterIcon from '../assets/twitter.svg'
import TikTokIcon from '../assets/tiktok.svg'

export function InstagramLink() {
  return (
    <a
      href="https://www.instagram.com/not.just.nerdy?igsh=MW9oams2bjlhenc4ZA=="
      className="text-sm/6 font-semibold text-gray-900"
      target="_blank"
    >
      <img alt="" src={InstagramIcon} className="h-8 w-auto" />
    </a>
  )
}

export function BlueSky() {
  return (
    <a
      href="https://bsky.app/profile/notjustnerdytv.bsky.social"
      className="text-sm/6 font-semibold text-gray-900"
      target="_blank"
    >
      <img alt="" src={BlueSkyIcon} className="h-8 w-auto" />
    </a>
  )
}

export function YoutubeLink() {
  return (
    <a
      href="https://www.youtube.com/@notjustnerdytv"
      className="text-sm/6 font-semibold text-gray-900"
      target="_blank"
    >
      <img alt="" src={YoutubeIcon} className="h-8 w-auto" />
    </a>
  )
}

export function TwitterLink() {
  return (
    <a
      href="https://x.com/joseas1993"
      className="text-sm/6 font-semibold text-gray-900"
      target="_blank"
    >
      <img alt="" src={TwitterIcon} className="h-8 w-auto" />
    </a>
  )
}

export function TikTokLink() {
  return (
    <a
      href="https://www.tiktok.com/404?fromUrl=/Galapaghost93"
      className="text-sm/6 font-semibold text-gray-900"
      target="_blank"
    >
      <img alt="" src={TikTokIcon} className="h-8 w-auto" />
    </a>
  )
}
