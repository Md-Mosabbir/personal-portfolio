import Github from '../assets/images/svg/mobile/github.svg'
import LinkedIn from '../assets/images/svg/mobile/linkedin.svg'
import Mail from '../assets/images/svg/mobile/mail.svg'

const links = [
  {
    id: 1,
    name: 'Github',
    img: { Github },
    link: 'https://github.com/Md-Mosabbir/',
  },
  {
    id: 2,
    name: 'LinkedIn',
    img: { LinkedIn },
    link: 'https://www.linkedin.com/in/mosabbir-khan-867b641a5/',
  },
  {
    id: 3,
    name: 'Mail',
    img: { Mail },
    link: 'mailto:mosabbir.fwd@gmail.com',
  },
]

const MobileLinks = () => {
  return (
    <div>
      <ul className="flex my-10 justify-start gap-5  md:hidden">
        {links.map((link) => {
          return (
            <>
              <a href={link.link} target="_blank" rel="noreferrer">
                <li
                  key={link.id}
                  className=" w-12 rounded-lg p-2 h-12 bg-accent"
                >
                  <img
                    src={Object.values(link.img)[0]}
                    alt={link.name}
                    className="w-full h-full object-center"
                  />
                </li>
              </a>
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default MobileLinks
